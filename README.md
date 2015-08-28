# svg-shield

## SVG shields (badges) for node with custom text, colors, and widths.

These SVGs show how you can customize the text, both colors, and the width of each side.

![Sample Shield](https://cdn.rawgit.com/jrit/svg-shield/master/shield-pass.svg)

![Sample Shield](https://cdn.rawgit.com/jrit/svg-shield/master/shield-warn.svg)

These SVGs are based on those used by [shields.io](http://shields.io).

## Install

```bash
npm install svg-shield --save
```

## API

```js
var shield = require( "svg-shield" );
var options = { name: "name", value: "value" }; // see Options section
shield.getShield( options, function ( err, svg ) {
    // do something with svg now, for example with Express
    return res.type( "image/svg+xml" ).send( svg );
}
```

### Options

#### `nameWidth` default _90_
The width of the left side of the shield

#### `valueWidth` default _40_
The width of the right side of the shield

#### `nameBgColor` default _"#555"_
The background color of the right side of the shield, this is commonly a neutral color, like gray.

#### `valueBgColor` default _"#4b1"_
The background color of the right side of the shield, this is commonly an indicator color, like red or green.

#### `name` default _""_
The text on the left side of the shield

#### `value` default _""_
The text on the right side of the shield

#### `fontFamily` default _"sans-serif"_
The font that should be used for badge text

#### `fontSize` default _11_
The size of the badge text; values above 17 will be reset to 17 max

## License

MIT
