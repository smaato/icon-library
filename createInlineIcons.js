
const fs = require('fs');

const PATH_TO_SCSS_ICON_FILE = './scss/_inlineIcons.scss';
const PATH_TO_SVG_ICONS = './svg';

const svgFiles = fs.readdirSync(PATH_TO_SVG_ICONS);

let inlineIcons = '// Don\'t change this file manually - it is generated by running: node createInlineIcons.js\n\n$inlineIcons: (\n';

svgFiles.forEach((svgFile) => {
  if (svgFile.includes('.svg')) {
    const svgIcon = fs.readFileSync(`${PATH_TO_SVG_ICONS}/${svgFile}`);
    const encodedSvgIcon = svgIcon.toString('base64');
    inlineIcons += `  "${svgFile}": "${encodedSvgIcon}",\n`;
  }
});

inlineIcons += ');';

fs.writeFileSync(PATH_TO_SCSS_ICON_FILE, inlineIcons);
