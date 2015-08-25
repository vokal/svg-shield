# svg-shield

Easy SVG shields (badges) for node with custom text, colors, and widths.

You can generate an SVG shield similar to on [shields.io](http://shields.io).

![Sample Shield](https://cdn.rawgit.com/jrit/svg-shield/master/shield.svg)

For the SVG above, you can customize the text, both colors, and the width of each size.

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

## License

MIT
