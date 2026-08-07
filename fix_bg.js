const fs = require('fs');
let css = fs.readFileSync('index_fixed.html', 'utf8');

// 1. Revert .sec-hero height
css = css.replace(
  /\.sec-hero\s*\{\s*height:\s*calc\(56\.25\s*\*\s*var\(--cvw\)\);\s*background:\s*#12120d;\s*\}/,
  ".sec-hero {\n  height: 56.25vw;\n  background: #12120d;\n}"
);

// 2. Revert .hero-video iframe width and height
css = css.replace(
  /width:\s*calc\(100\s*\*\s*var\(--cvw\)\);\s*height:\s*calc\(56\.25\s*\*\s*var\(--cvw\)\);/g,
  "width: 100vw;\n  height: 56.25vw;"
);

// 3. Revert .custom-dome desktop
css = css.replace(
  /\.custom-dome\s*\{\s*position:\s*absolute;\s*left:\s*50%;\s*translate:\s*-50%\s*0;\s*top:\s*calc\(19\.79\s*\*\s*var\(--cvw\)\);\s*width:\s*calc\(100\s*\*\s*var\(--cvw\)\);\s*max-width:\s*none;\s*height:\s*calc\(79\.95\s*\*\s*var\(--cvw\)\);\s*background:\s*var\(--moss\);\s*border-radius:\s*calc\(50\s*\*\s*var\(--cvw\)\)\s*calc\(50\s*\*\s*var\(--cvw\)\)\s*0\s*0;\s*\}/,
  `.custom-dome {
  position: absolute;
  left: 50%;
  translate: -50% 0;
  top: calc(19.79 * var(--cvw));
  width: 100vw;
  max-width: none;
  height: 79.95vw;
  background: var(--moss);
  border-radius: 50vw 50vw 0 0;
}`
);

// 4. Revert .custom-dome mobile
css = css.replace(
  /\.custom-dome\s*\{\s*top:\s*12rem;\s*bottom:\s*-80px;\s*height:\s*auto;\s*left:\s*50%;\s*translate:\s*-50%\s*0;\s*width:\s*calc\(100\s*\*\s*var\(--cvw\)\);\s*border-radius:\s*calc\(50\s*\*\s*var\(--cvw\)\)\s*calc\(50\s*\*\s*var\(--cvw\)\)\s*0\s*0;\s*\}/,
  `.custom-dome {
    top: 12rem;
    bottom: -80px;
    height: auto;
    left: 50%;
    translate: -50% 0;
    width: 100vw;
    border-radius: 50vw 50vw 0 0;
  }`
);

// 5. Apply .rail full bleed fix
css = css.replace(
  /\.rail\s*\{\s*position:\s*absolute;\s*left:\s*0;\s*right:\s*0;\s*top:\s*calc\(25\.82\s*\*\s*var\(--cvw\)\);\s*overflow:\s*hidden;\s*\}/,
  `.rail {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  top: calc(25.82 * var(--cvw));
  overflow: hidden;
}`
);

fs.writeFileSync('index_fixed2.html', css);
