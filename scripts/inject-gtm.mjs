#!/usr/bin/env node
// Injects the Google Tag Manager snippet into the built ReDoc page.
//
// It must only touch the document's own </head>. The page embeds the whole
// OpenAPI spec as JSON inside a <script>, and that JSON contains example HTML
// with its own </head>. A global replace (the old `sed -i 's#</head>#…#'`)
// also hit that one, and the injected </script> then terminated the state
// script early, dumping the rest of the spec as visible page text.
import { readFileSync, writeFileSync } from 'node:fs';

const GTM_ID = process.env.GTM_ID ?? 'GTM-PPRVX4P7';
const file = process.argv[2] ?? 'docs/index.html';

const snippet =
  '<!-- Google Tag Manager --><script>(function(w,d,s,l,i){w[l]=w[l]||[];' +
  'w[l].push({"gtm.start":new Date().getTime(),event:"gtm.js"});' +
  'var f=d.getElementsByTagName(s)[0],j=d.createElement(s),' +
  'dl=l!="dataLayer"?"&l="+l:"";j.async=true;' +
  'j.src="https://www.googletagmanager.com/gtm.js?id="+i+dl;' +
  'f.parentNode.insertBefore(j,f);})(window,document,"script","dataLayer","' +
  GTM_ID + '");</script><!-- End Google Tag Manager -->';

const html = readFileSync(file, 'utf8');

if (html.includes(GTM_ID)) {
  console.log(`GTM snippet already present in ${file} - nothing to do.`);
  process.exit(0);
}

const at = html.indexOf('</head>');
if (at === -1) {
  console.error(`No </head> found in ${file}.`);
  process.exit(1);
}

writeFileSync(file, html.slice(0, at) + snippet + html.slice(at));
console.log(`Injected GTM (${GTM_ID}) into ${file}.`);
