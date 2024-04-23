
# Smaato Icon Library

This is Smaato's icon library. See `index.html` for the available icons and their class names.

## Usage

### SASS

Smaato's Icon Library expects you to use SASS in your project. You can import
the index file like this:

```scss
@import 'icon-library/scss/index';
```

Add the desired icon to your element by adding an `.icon` class and the
relevant icon class. The icon will be added as a background image set to 100%
of the width and height of the element.

In limited cases, the icon may need to be sized smaller than the element. This
can be achieved by overwriting the `background-size` property set in
`index.scss`.

**Note:** The icon element should always have an equal width and height
(including padding) to avoid distorting the icon.

### CSS

You can also choose to link the CSS file in your HTML:

```html
<link rel="stylesheet" type="text/css" href="icon-library/css/index.css">
```

**Note:** The CSS file will always include all icons (also the ones you don't
use) and linking it will result in an additional request.

## Development

The project requires `node (v20.12.2)` and `npm (10.5.0)`. Run `npm install` to install the dependencies.

Run:
* `npm run createInlineIcons` to create inline icons from the SVG icons
* `npm run compileScss` to compile the SASS files into the CSS file
* `npm start` to first create the inline icons and then compile the SASS files
