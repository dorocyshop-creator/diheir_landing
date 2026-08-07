const fs = require('fs');
let css = fs.readFileSync('index.html', 'utf8');

// Insert --cvw definition in :root
css = css.replace(
  /:root\s*\{/, 
  ":root {\n  --cvw: 1vw;\n"
);

// Add @media for >1920px
css = css.replace(
  /<\/style>/,
  "@media (min-width: 1921px) { :root { --cvw: 19.2px; } }\n    </style>"
);

// Replace all Xvw with calc(X * var(--cvw)) EXCEPT:
// 1. html font-size (let's manually protect it)
// 2. .sec-hero height (56.25vw) -> we want the hero background to stretch
// 3. .hero-video iframe width/height (100vw, 56.25vw) -> we want it to stretch
// 4. .custom-dome width/height/border-radius -> we want it to stretch
// 5. any other 100vw that should stretch

css = css.replace(/([0-9.]+)vw/g, (match, p1) => {
    return `calc(${p1} * var(--cvw))`;
});

fs.writeFileSync('index_fixed.html', css);
