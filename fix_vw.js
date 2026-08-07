const fs = require('fs');
let css = fs.readFileSync('index.html', 'utf8');

// First, protect the html font-size rule so the regex doesn't hit it.
css = css.replace('font-size: 0.83333vw;', 'FONT_SIZE_PLACEHOLDER');

// Now replace all other vw
css = css.replace(/([0-9.]+)vw/g, (match, p1) => {
    let val = parseFloat(p1);
    let remVal = (val * 1.2).toFixed(4).replace(/\.?0+$/, ''); // clean up trailing zeros
    return remVal + 'rem';
});

// Now restore the html font-size with the min() clamp!
css = css.replace('FONT_SIZE_PLACEHOLDER', 'font-size: min(0.83333vw, 16px);');

fs.writeFileSync('index_fixed.html', css);
console.log("Done fixed");
