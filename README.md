# injecss

Component that helps you to inject stylesheets at runtime.

## Installation

    bower install konexmedia/race
    
OR

    component install konexmedia/race

OR

    npm install konexmedia/race

## API

### injecss(uri[, callback);

## Usage example

```javascript
var injecss = require('injecss');

injecss('styles/ie6.min.css', function (err) {
    if (err) {
        return console.error(err);
    }

    // Stylesheet loaded
});
```

## Author

Copyright 2014, [konexmedia](http://konexmedia.com)