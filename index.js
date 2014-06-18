/*
 * injecss
 *
 * Copyright(c) 2014 André König <andre.koenig@konexmedia.com>
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@konexmedia.com>
 *
 */

module.exports = function injecss (uri, callback) {

    'use strict';

    var $head;
    var $link;
    
    if ('string' !== typeof uri) {
        return console.error('Please define a valid stylesheet URI.');
    }
    
    $head = document.getElementsByTagName('head')[0];
    $link = document.createElement('link');
    
    $link.type = 'text/css';
    $link.rel = 'stylesheet';
    $link.href = uri;
    
    if (callback) {
        $link.addEventListener('load', callback);
    }

    $head.appendChild($link);
};