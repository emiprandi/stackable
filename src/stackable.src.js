/*
 * stackable.js
 * Author: Emiliano Prandi
 * http://emiprandi.github.io/stackable
 * MIT License
 */

(function ($) {
    'use strict';

    /* CLASS
     * =============================== */
    var STACKable = function (e, o) {
        this.stacker = {
            e: null,
            html: '<li class="stacker"><a href="#">' + o.stackerLabel + '</a><ul></ul></li>',
            width: 0
        };
        this.e = e;
        this.navItems = {
            items: {},
            length: 0
        };
        this.navWidth =
        this.containerWidth = 0;

        var t = 0,
            tw = 0,
            to = this.navItems.items;
        this.e.children('li').each(function () {
            to[t] = {
                html: $(this)[0].outerHTML,
                width: $(this).outerWidth(true),
                submenu: false,
                visible: true
            };
            if ($(this).hasClass('submenu')) to[t].submenu = true;
            tw += to[t].width;
            t++;
        });
        this.navItems.length = t;
        this.navWidth = tw;

        this.stacker.e = $(this.stacker.html).appendTo(this.e);
        this.stacker.width = this.stacker.e.outerWidth(true);
        this.stacker.e.remove();

        this.magic();
    };

    STACKable.prototype.resetStack = function () {
        for (var tc = 0; tc < this.navItems.length; tc++) {
            this.navItems.items[tc].visible = true;
        }
    };

    STACKable.prototype.magic = function () {
        this.resetStack();
        this.containerWidth = this.e.parent().outerWidth(true);

        var match = 0, tc = 0;

        if (this.containerWidth < this.navWidth) {
            for (tc = 0; tc < this.navItems.length; tc++) {
                match += this.navItems.items[tc].width;
                if ((match+this.stacker.width) > this.containerWidth) {
                    this.navItems.items[tc].visible = false;
                }
            }
        }
        this.stack();
    };

    STACKable.prototype.stack = function () {
        this.e.empty();
        var showStacker = false, tc = 0;
        for (tc = 0; tc < this.navItems.length; tc++) {
            if (this.navItems.items[tc].visible) {
                $(this.navItems.items[tc].html).appendTo(this.e);
            } else {
                showStacker = true;
                break;
            }
        }

        if (showStacker) {
            this.stacker.e = $(this.stacker.html).appendTo(this.e);
            for (tc = 0; tc < this.navItems.length; tc++) {
                if (!this.navItems.items[tc].visible) {
                    $(this.navItems.items[tc].html).appendTo(this.stacker.e.children('ul'));
                    this.navItems.items[tc].visible = false;
                }
            }
        }
    };

    STACKable.prototype.setActions = function () {
        var te = this.e,
            menuSelector = 'li.submenu, li.stacker',
            menuAnchorSelector = 'li.submenu>a, li.stacker>a';

        $(te).on('click.stackable.nav', menuAnchorSelector, function () {
            if ($(this).parent().hasClass('open')) {
                $(te.selector).children(menuSelector).removeClass('open');
            } else {
                $(te.selector).children(menuSelector).removeClass('open');
                $(this).parent().toggleClass('open');
            }
            return false;
        });
        $(document).on('click.stackable.closure', function () {
            $(te.selector).children(menuSelector).removeClass('open');
        });
    };

    /* PLUGIN
     * =============================== */
    $.fn.stackable = function (options) {
        var defaults = { stackerLabel: '+' },
            ko = false;
            this.each(function () { if(this.tagName!='UL') ko = true; });

        if (!ko) {
            var d = new STACKable(this, $.extend(defaults, options));
            d.setActions();
            $(window).resize( function () { d.magic(); });
        }
    };

})( jQuery );
