"use strict";

var xtend = require( "xtend" );
var mustache = require( "mustache" );

var shield = {
    svgData: '<svg xmlns="http://www.w3.org/2000/svg" width="{{width}}" height="20">\n\
    <defs>\n\
        <filter id="drop-shadow">\n\
            <feOffset result="offOut" in="SourceAlpha" dx="0.5" dy="1" />\n\
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="0.5" />\n\
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />\n\
        </filter>\n\
    </defs>\n\
    <mask id="round-rect"><rect width="{{width}}" height="20" rx="{{radius}}" ry="{{radius}}" fill="#fff"/></mask>\n\
    <g mask="url(#round-rect)">\n\
        <path fill="{{nameBgColor}}" d="M0 0h{{nameWidth}}v20H0z"/>\n\
        <path fill="{{valueBgColor}}" d="M{{nameWidth}} 0h60v20H{{nameWidth}}z"/>\n\
    </g>\n\
    <g fill="#fff" text-anchor="middle" font-family="{{fontFamily}}" font-size="{{fontSize}}">\n\
        <text x="{{nameCenter}}" y="14" filter="url(#drop-shadow)">{{name}}</text>\n\
        <text x="{{valueCenter}}" y="14" filter="url(#drop-shadow)">{{value}}</text>\n\
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
        fontSize: 11,
        radius: 5
    };

    var config = xtend( {}, defaults, options );

    config.fontSize = config.fontSize < 8 ? 8 : config.fontSize > 17 ? 17 : config.fontSize;
    config.radius = config.radius < 0 ? 0 : config.radius > 10 ? 10 : config.radius;
    config.nameCenter = config.nameWidth / 2;
    config.valueCenter = config.nameWidth + config.valueWidth / 2;
    config.width = config.nameWidth + config.valueWidth;

    var svg = mustache.render( shield.svgData, config );
    callback( null, svg );
};
