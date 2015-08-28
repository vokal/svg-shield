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
    <defs>\n\
        <filter id="drop-shadow">\n\
            <feOffset result="offOut" in="SourceAlpha" dx="0.5" dy="1" />\n\
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="0.5" />\n\
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />\n\
        </filter>\n\
    </defs>\n\
    <mask id="round-rect"><rect width="130" height="20" rx="5" ry="5" fill="#fff"/></mask>\n\
    <g mask="url(#round-rect)">\n\
        <path fill="#555" d="M0 0h90v20H0z"/>\n\
        <path fill="#4b1" d="M90 0h60v20H90z"/>\n\
    </g>\n\
    <g fill="#fff" text-anchor="middle" font-family="sans-serif" font-size="11">\n\
        <text x="45" y="14" filter="url(#drop-shadow)"></text>\n\
        <text x="110" y="14" filter="url(#drop-shadow)"></text>\n\
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
            value: "value",
            fontFamily: "Verdana, sans-serif",
            fontSize: 12,
            radius: 7
        };

        shield.getShield( options, function ( err, res )
        {
            assert.equal( err, null );
            assert.equal( res,
            '<svg xmlns="http://www.w3.org/2000/svg" width="150" height="20">\n\
    <defs>\n\
        <filter id="drop-shadow">\n\
            <feOffset result="offOut" in="SourceAlpha" dx="0.5" dy="1" />\n\
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="0.5" />\n\
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />\n\
        </filter>\n\
    </defs>\n\
    <mask id="round-rect"><rect width="150" height="20" rx="7" ry="7" fill="#fff"/></mask>\n\
    <g mask="url(#round-rect)">\n\
        <path fill="#333" d="M0 0h100v20H0z"/>\n\
        <path fill="#000" d="M100 0h60v20H100z"/>\n\
    </g>\n\
    <g fill="#fff" text-anchor="middle" font-family="Verdana, sans-serif" font-size="12">\n\
        <text x="50" y="14" filter="url(#drop-shadow)">name</text>\n\
        <text x="125" y="14" filter="url(#drop-shadow)">value</text>\n\
    </g>\n\
</svg>' );

            done();
        } );
    } );

    it( "should get a shield with max 17 font-size", function ( done )
    {
        var options = {
            valueWidth: 50,
            nameWidth: 100,
            valueBgColor: "#000",
            nameBgColor: "#333",
            name: "name",
            value: "value",
            fontFamily: "Verdana, sans-serif",
            fontSize: 20
        };

        shield.getShield( options, function ( err, res )
        {
            assert.equal( err, null );
            assert.equal( res,
            '<svg xmlns="http://www.w3.org/2000/svg" width="150" height="20">\n\
    <defs>\n\
        <filter id="drop-shadow">\n\
            <feOffset result="offOut" in="SourceAlpha" dx="0.5" dy="1" />\n\
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="0.5" />\n\
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />\n\
        </filter>\n\
    </defs>\n\
    <mask id="round-rect"><rect width="150" height="20" rx="5" ry="5" fill="#fff"/></mask>\n\
    <g mask="url(#round-rect)">\n\
        <path fill="#333" d="M0 0h100v20H0z"/>\n\
        <path fill="#000" d="M100 0h60v20H100z"/>\n\
    </g>\n\
    <g fill="#fff" text-anchor="middle" font-family="Verdana, sans-serif" font-size="17">\n\
        <text x="50" y="14" filter="url(#drop-shadow)">name</text>\n\
        <text x="125" y="14" filter="url(#drop-shadow)">value</text>\n\
    </g>\n\
</svg>' );

            done();
        } );
    } );

    it( "should get a shield with min 8 font-size", function ( done )
    {
        var options = {
            valueWidth: 50,
            nameWidth: 100,
            valueBgColor: "#000",
            nameBgColor: "#333",
            name: "name",
            value: "value",
            fontFamily: "Verdana, sans-serif",
            fontSize: 4
        };

        shield.getShield( options, function ( err, res )
        {
            assert.equal( err, null );
            assert.equal( res,
            '<svg xmlns="http://www.w3.org/2000/svg" width="150" height="20">\n\
    <defs>\n\
        <filter id="drop-shadow">\n\
            <feOffset result="offOut" in="SourceAlpha" dx="0.5" dy="1" />\n\
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="0.5" />\n\
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />\n\
        </filter>\n\
    </defs>\n\
    <mask id="round-rect"><rect width="150" height="20" rx="5" ry="5" fill="#fff"/></mask>\n\
    <g mask="url(#round-rect)">\n\
        <path fill="#333" d="M0 0h100v20H0z"/>\n\
        <path fill="#000" d="M100 0h60v20H100z"/>\n\
    </g>\n\
    <g fill="#fff" text-anchor="middle" font-family="Verdana, sans-serif" font-size="8">\n\
        <text x="50" y="14" filter="url(#drop-shadow)">name</text>\n\
        <text x="125" y="14" filter="url(#drop-shadow)">value</text>\n\
    </g>\n\
</svg>' );

            done();
        } );
    } );

    it( "should get a shield with min 0 corner radius", function ( done )
    {
        var options = {
            valueWidth: 50,
            nameWidth: 100,
            valueBgColor: "#000",
            nameBgColor: "#333",
            name: "name",
            value: "value",
            fontFamily: "Verdana, sans-serif",
            fontSize: 12,
            radius: -6
        };

        shield.getShield( options, function ( err, res )
        {
            assert.equal( err, null );
            assert.equal( res,
            '<svg xmlns="http://www.w3.org/2000/svg" width="150" height="20">\n\
    <defs>\n\
        <filter id="drop-shadow">\n\
            <feOffset result="offOut" in="SourceAlpha" dx="0.5" dy="1" />\n\
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="0.5" />\n\
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />\n\
        </filter>\n\
    </defs>\n\
    <mask id="round-rect"><rect width="150" height="20" rx="0" ry="0" fill="#fff"/></mask>\n\
    <g mask="url(#round-rect)">\n\
        <path fill="#333" d="M0 0h100v20H0z"/>\n\
        <path fill="#000" d="M100 0h60v20H100z"/>\n\
    </g>\n\
    <g fill="#fff" text-anchor="middle" font-family="Verdana, sans-serif" font-size="12">\n\
        <text x="50" y="14" filter="url(#drop-shadow)">name</text>\n\
        <text x="125" y="14" filter="url(#drop-shadow)">value</text>\n\
    </g>\n\
</svg>' );

            done();
        } );
    } );

    it( "should get a shield with max 10 corner radius", function ( done )
    {
        var options = {
            valueWidth: 50,
            nameWidth: 100,
            valueBgColor: "#000",
            nameBgColor: "#333",
            name: "name",
            value: "value",
            fontFamily: "Verdana, sans-serif",
            fontSize: 12,
            radius: 23
        };

        shield.getShield( options, function ( err, res )
        {
            assert.equal( err, null );
            assert.equal( res,
            '<svg xmlns="http://www.w3.org/2000/svg" width="150" height="20">\n\
    <defs>\n\
        <filter id="drop-shadow">\n\
            <feOffset result="offOut" in="SourceAlpha" dx="0.5" dy="1" />\n\
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="0.5" />\n\
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />\n\
        </filter>\n\
    </defs>\n\
    <mask id="round-rect"><rect width="150" height="20" rx="10" ry="10" fill="#fff"/></mask>\n\
    <g mask="url(#round-rect)">\n\
        <path fill="#333" d="M0 0h100v20H0z"/>\n\
        <path fill="#000" d="M100 0h60v20H100z"/>\n\
    </g>\n\
    <g fill="#fff" text-anchor="middle" font-family="Verdana, sans-serif" font-size="12">\n\
        <text x="50" y="14" filter="url(#drop-shadow)">name</text>\n\
        <text x="125" y="14" filter="url(#drop-shadow)">value</text>\n\
    </g>\n\
</svg>' );

            done();
        } );
    } );
} );
