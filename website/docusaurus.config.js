// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Momolem\'s Digital Garden',
  tagline: 'This is where my knowledge grows',
  favicon: 'img/favicon.ico',


  url: 'https://vogel.business',
  baseUrl: '/obsidiosaurus-docs/',

  organizationName: 'momolem', 
  projectName: 'digitalGarden', 
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          //sidebarCollapsed: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/icon.png',
      navbar: {
        title: 'Momolem\'s Digital Garden',
        logo: {
          alt: 'logo',
          src: 'img/icon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'main',
            position: 'left',
            label: 'Computer Science',
          },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
          {
            href: 'https://github.com/Momolem',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub',
          },
          {
            href: 'https://vogel.business',
            position: 'right',
            className: 'header-vogel-link',
            'aria-label': 'CIMSTA.com',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Moritz Vogel`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      mermaid: {
        theme: {light: 'neutral', dark: 'dark'},
      },
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: 'RE0I3LUV18',
  
      //   // Public API key: it is safe to commit it
      //   apiKey: 'dddffdbe0332b6a67351cb9f1e19d152',
  
      //   indexName: 'obsidiosaurus',
  
      //   // Optional: see doc section below
      //   contextualSearch: true,
  
      //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //   //externalUrlRegex: 'external\\.com|domain\\.com',
  
      //   // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      //   //replaceSearchResultPathname: {
      //   //  from: '/docs/', // or as RegExp: /\/docs\//
      //   //  to: '/',
      //   //},
        
      //   // Optional: Algolia search parameters
      //   searchParameters: {},
  
      //   // Optional: path for search page that enabled by default (`false` to disable it)
      //   searchPagePath: 'search',
  

      // },
    }),

    plugins: [
      [
        '@docusaurus/plugin-content-blog',
        {
          id: 'release_notes',
          routeBasePath: 'release_notes',
          path: './release_notes__blog',
        },
      ],
      [
        require.resolve("@cmfcmf/docusaurus-search-local"),
        {
            // whether to index docs pages
            indexDocs: true,
          
            // Whether to also index the titles of the parent categories in the sidebar of a doc page.
            // 0 disables this feature.
            // 1 indexes the direct parent category in the sidebar of a doc page
            // 2 indexes up to two nested parent categories of a doc page
            // 3...
            //
            // Do _not_ use Infinity, the value must be a JSON-serializable integer.
            indexDocSidebarParentCategories: 0,
          
            // whether to index blog pages
            indexBlog: true,
          
            // whether to index static pages
            // /404.html is never indexed
            indexPages: false,
          
            // language of your documentation, see next section
            language: "en",
          
            // setting this to "none" will prevent the default CSS to be included. The default CSS
            // comes from autocomplete-theme-classic, which you can read more about here:
            // https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-theme-classic/
            // When you want to overwrite CSS variables defined by the default theme, make sure to suffix your
            // overwrites with `!important`, because they might otherwise not be applied as expected. See the
            // following comment for more information: https://github.com/cmfcmf/docusaurus-search-local/issues/107#issuecomment-1119831938.
            //style: undefined,
          
            // The maximum number of search results shown to the user. This does _not_ affect performance of
            // searches, but simply does not display additional search results that have been found.
            maxSearchResults: 8,
          
            // lunr.js-specific settings
            lunr: {
              // When indexing your documents, their content is split into "tokens".
              // Text entered into the search box is also tokenized.
              // This setting configures the separator used to determine where to split the text into tokens.
              // By default, it splits the text at whitespace and dashes.
              //
              // Note: Does not work for "ja" and "th" languages, since these use a different tokenizer.
              tokenizerSeparator: /[\s\-]+/,
              // https://lunrjs.com/guides/customising.html#similarity-tuning
              //
              // This parameter controls the importance given to the length of a document and its fields. This
              // value must be between 0 and 1, and by default it has a value of 0.75. Reducing this value
              // reduces the effect of different length documents on a term’s importance to that document.
              b: 0.75,
              // This controls how quickly the boost given by a common word reaches saturation. Increasing it
              // will slow down the rate of saturation and lower values result in quicker saturation. The
              // default value is 1.2. If the collection of documents being indexed have high occurrences
              // of words that are not covered by a stop word filter, these words can quickly dominate any
              // similarity calculation. In these cases, this value can be reduced to get more balanced results.
              k1: 1.2,
              // By default, we rank pages where the search term appears in the title higher than pages where
              // the search term appears in just the text. This is done by "boosting" title matches with a
              // higher value than content matches. The concrete boosting behavior can be controlled by changing
              // the following settings.
              titleBoost: 5,
              contentBoost: 1,
              tagsBoost: 3,
              parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
            }
        },  
      ]
      
    ],
    markdown: {
      mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
};



module.exports = config;
