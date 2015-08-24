"use strict";

var xtend = require( "xtend" );
var mustache = require( "mustache" );

var shield = {
    svgData: '<svg xmlns="http://www.w3.org/2000/svg" width="{{width}}" height="20">\n\
    <mask id="a"><rect width="{{width}}" height="20" rx="3" fill="#fff"/></mask>\n\
    <g mask="url(#a)">\n\
        <path fill="{{nameBgColor}}" d="M0 0h{{nameWidth}}v20H0z"/>\n\
        <path fill="{{valueBgColor}}" d="M{{nameWidth}} 0h60v20H{{nameWidth}}z"/>\n\
    </g>\n\
    <g fill="#fff"\n\
        text-anchor="middle"\n\
        font-family="sans-serif"\n\
        font-weight="bold"\n\
        font-size="11">\n\
        <text x="{{nameCenter}}" y="14">\n\
            {{name}}\n\
        </text>\n\
        <text x="{{valueCenter}}" y="14">\n\
            {{value}}\n\
        </text>\n\
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
        value: ""
    };

    var config = xtend( {}, defaults, options );

    config.nameCenter = config.nameWidth / 2;
    config.valueCenter = config.nameWidth + config.valueWidth / 2;
    config.width = config.nameWidth + config.valueWidth;

    var svg = mustache.render( shield.svgData, config );
    callback( null, svg );
};
