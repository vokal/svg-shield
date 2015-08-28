"use strict";

var xtend = require( "xtend" );
var mustache = require( "mustache" );

var shield = {
    svgData: '<svg xmlns="http://www.w3.org/2000/svg" width="{{width}}" height="20">\n\
    <mask id="a"><rect width="{{width}}" height="20" rx="5" ry="5" fill="#fff"/></mask>\n\
    <g mask="url(#a)">\n\
        <path fill="{{nameBgColor}}" d="M0 0h{{nameWidth}}v20H0z"/>\n\
        <path fill="{{valueBgColor}}" d="M{{nameWidth}} 0h60v20H{{nameWidth}}z"/>\n\
    </g>\n\
    <g fill="#fff" text-anchor="middle" font-family="{{fontFamily}}" font-size="{{fontSize}}">\n\
        <text x="{{nameCenter}}" y="15" fill="#000">{{name}}</text>\n\
        <text x="{{valueCenter}}" y="15" fill="#000">{{value}}</text>\n\
        <text x="{{nameCenter}}" y="14">{{name}}</text>\n\
        <text x="{{valueCenter}}" y="14">{{value}}</text>\n\
    </g>\n\
</svg>'
};

module.exports = shield;

shield.getShield = function ( options, callback )
{
    var defaults = {
        valueWidth: 40,
        nameWidth: 90,
        valueBgColor: "#4b1",
        nameBgColor: "#555",
        name: "",
        value: "",
        fontFamily: "sans-serif",
        fontSize: 11
    };

    var config = xtend( {}, defaults, options );

    if ( config.fontSize > 17 ) {
        config.fontSize = 17;
    }

    config.nameCenter = config.nameWidth / 2;
    config.valueCenter = config.nameWidth + config.valueWidth / 2;
    config.width = config.nameWidth + config.valueWidth;

    var svg = mustache.render( shield.svgData, config );
    callback( null, svg );
};
