// @ts-check
/** @type {import('@vivliostyle/cli').VivliostyleConfigSchema} */
const vivliostyleConfig = {
  title: '言将机戦人等定引之字言集', // populated into 'publication.json', default to 'title' of the first entry or 'name' in 'package.json'.
  author: '日本机戦連盟', // default to 'author' in 'package.json' or undefined
  // language: 'la',
  // readingProgression: 'rtl', // reading progression direction, 'ltr' or 'rtl'.
  size: 'B6',
  // theme: '', // .css or local dir or npm package. default to undefined
  image: 'ghcr.io/vivliostyle/cli:8.19.0',
  entry: [ // **required field**
    // 'introduction.md', // 'title' is automatically guessed from the file (frontmatter > first heading)
    // {
    //   path: 'epigraph.md',
    //   title: 'おわりに', // title can be overwritten (entry > file),
    //   theme: '@vivliostyle/theme-whatever' // theme can be set individually. default to root 'theme'
    // },

    '1_01_処.html',
    '1_10_右.html',
    '1_12_口.html',
    '1_13_筆.html',
    '1_14_門.html',
    '2_02_常.html',
    '2_03_ノノ.html',
    '2_13_傾.html',
    '2_14_針.html',
  ], // 'entry' can be 'string' or 'object' if there's only single markdown file
  // entryContext: './manuscripts', // default to '.' (relative to 'vivliostyle.config.js')
  output: [ "../言将机戦人等定引之字言集.pdf" ] // path to generate draft file(s). default to '{title}.pdf'
  //   './output.pdf', // the output format will be inferred from the name.
  //   {
  //     path: './book',
  //     format: 'webpub',
  //   },
  // ],
  // workspaceDir: '.vivliostyle', // directory which is saved intermediate files.
  // toc: {
  //   title: 'Table of Contents',
  //   htmlPath: 'index.html',
  //   sectionDepth: 3,
  // },
  // cover: './cover.png', // cover image. default to undefined.
  // vfm: { // options of VFM processor
  //   replace: [ // specify replace handlers to modify HTML outputs
  //     {
  //       // This handler replaces {current_time} to a current local time tag.
  //       test: /{current_time}/,
  //       match: (_, h) => {
  //         const currentTime = new Date().toLocaleString();
  //         return h('time', { datetime: currentTime }, currentTime);
  //       },
  //     },
  //   ],
  //   hardLineBreaks: true, // converts line breaks of VFM to <br> tags. default to 'false'.
  //   disableFormatHtml: true, // disables HTML formatting. default to 'false'.
  // },
};

module.exports = vivliostyleConfig;
