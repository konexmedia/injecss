# injecss

Component that helps you to inject stylesheets at runtime.

## Installation

    bower install konexmedia/race
    
OR

    component install konexmedia/race

## API

### injecss(uri[, callback]);

**Arguments**

`uri`

String

The URI which points to the stylesheet that should be injected.

`callback` (optional)

Function which should be called after the stylesheet has been injected.

## Usage example

```javascript
var injecss = konexmedia.injecss; // AMD: require(['injecss'], function () {...});

injecss('styles/ie6.min.css', function (err) {
    if (err) {
        return console.error(err);
    }

    // Stylesheet loaded
});
```

## Author

Copyright 2014, [konexmedia](http://konexmedia.com)
