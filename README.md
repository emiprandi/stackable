# stackable.js
Stackable is a jQuery plugin that automatically stack menu options when its container gets smaller.
<!--- [Demo page](http://emiprandi.github.io/stackable) available. -->


## Usage
Add ```stackable.css``` in the ```<head>```
```html
<link rel="stylesheet" href="stackable.css">
```

Navigation bar:
```html
<ul class='nav'>
    <li><a href="#">Option #1</a></li>
    <li><a href="#">Option #2</a></li>
    <li><a href="#">Option #3</a></li>
    <li><a href="#">Option #4</a></li>
    <li><a href="#">Option #5</a></li>
</ul>
```

Include jQuery and Stackable right before ```</body>```
```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="stackable.min.js"></script>
```

Plugin call:
```javascript
$('.nav').stackable();
```


## Features

### Stacker label
By ```default``` the stacker label will be ```+```, but you can change it:
```javascript
$('.nav').stackable({
  stackerLabel: 'More options'
})
```

### Nested items
```html
<ul class='nav'>
    <li><a href="#">Option #1</a></li>
    <li><a href="#">Option #2</a></li>
    <li>
        <a href="#">Option #3</a>
        <ul>
            <li><a href="#">Option A</a></li>
            <li><a href="#">Option B</a></li>
            <li><a href="#">Option C</a></li>
        </ul>
    </li>
    <li><a href="#">Option #4</a></li>
    <li><a href="#">Option #5</a></li>
</ul>
```

## Changelog

### v0.0.1
* Initial version

## Contributing
A lot to improve, everyone is welcome to contribute.
