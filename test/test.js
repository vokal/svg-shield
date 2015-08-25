"use strict";

var assert = require( "assert" );
var shield = require( "../source" );

describe( "svg-shield", function ()
{
    it( "should get a shield with defaults", function ( done )
    {
        var options = {};

        shield.getShield( options, function ( err, res )
        {
            assert.equal( err, null );
            assert.equal( res, '<svg xmlns="http://www.w3.org/2000/svg" width="130" height="20">\n\
    <mask id="a"><rect width="130" height="20" rx="3" fill="#fff"/></mask>\n\
    <g mask="url(#a)">\n\
        <path fill="#555" d="M0 0h90v20H0z"/>\n\
        <path fill="#4b1" d="M90 0h60v20H90z"/>\n\
    </g>\n\
    <g fill="#fff" text-anchor="middle" font-family="sans-serif" font-size="11">\n\
        <text x="45" y="15" fill="#000"></text>\n\
        <text x="110" y="15" fill="#000"></text>\n\
        <text x="45" y="14"></text>\n\
        <text x="110" y="14"></text>\n\
    </g>\n\
</svg>' );

            done();
        } );
    } );

    it( "should get a shield with customs", function ( done )
    {
        var options = {
            valueWidth: 50,
            nameWidth: 100,
            valueBgColor: "#000",
            nameBgColor: "#333",
            name: "name",
            value: "value"
        };

        shield.getShield( options, function ( err, res )
        {
            assert.equal( err, null );
            assert.equal( res,
            '<svg xmlns="http://www.w3.org/2000/svg" width="150" height="20">\n\
    <mask id="a"><rect width="150" height="20" rx="3" fill="#fff"/></mask>\n\
    <g mask="url(#a)">\n\
        <path fill="#333" d="M0 0h100v20H0z"/>\n\
        <path fill="#000" d="M100 0h60v20H100z"/>\n\
    </g>\n\
    <g fill="#fff" text-anchor="middle" font-family="sans-serif" font-size="11">\n\
        <text x="50" y="15" fill="#000">name</text>\n\
        <text x="125" y="15" fill="#000">value</text>\n\
        <text x="50" y="14">name</text>\n\
        <text x="125" y="14">value</text>\n\
    </g>\n\
</svg>' );

            done();
        } );
    } );
} );
