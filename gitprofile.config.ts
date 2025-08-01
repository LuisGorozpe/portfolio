// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'LuisGorozpe', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Phd thesis',
          description:
            'Probability and Statistics Phd thesis about No lineal Statistics',
          imageUrl:
            'https://luisgorozpe.github.io/torus.png',
          link: 'https://luisgorozpe.github.io/under-construction.html',
        },
        {
          title: 'Frechet Mean',
          description:
            'Python Scrits with fuctions to estimate the Frechet Mean',
          imageUrl:
            'https://luisgorozpe.github.io/Elip-Geo-Tan.png',
          link: 'https://luisgorozpe.github.io/under-construction.html',
        },
      ],
    },
  },
  seo: { title: 'Portfolio', description: '', imageURL: '' },
  social: {
    linkedin: 'luisgorozpe',
x: '',
   mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'luis.ascencio@cimat.mx',
  },
  resume: {
    fileUrl:
      'https://luisgorozpe.github.io/CV-Luis-Enrique-Ascencio-G.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Bash',
    'GNU/linux',
    'Statistics',
    'Mathematics',
    'Data Science',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'HTML',
    'TypeScript',
    'Latex',
    'VS code',
  ],
  experiences: [
    {
      company: 'Centro de Investigación en Matemáticas, A.C.',
      position: 'Graduate Teaching Assistant',
      from: 'October 2022',
      to: 'July 2016',
      companyLink: 'https://www.cimat.mx',
    },
    {
      company: 'UAM Iztapalapa',
      position: 'Teaching Assistant',
      from: 'March 2016',
      to: 'July 2019',
      companyLink: 'https://www.uam.mx',
    },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
      {
      institution: 'Centro de Investigación en Matemáticas, A.C.',
      degree: 'PhD Studies in probability and statistics',
      from: '2025',
      to: '2021',
    },
    {
      institution: 'Universidad Autónoma Metropolitana',
      degree: 'Master’s degree in Mathematical Sciences',
      from: '2021',
      to: '2018',
    },
    {
      institution: 'Universidad Autónoma Metropolitana',
      degree: 'Bachelor of Mathematics',
      from: '2017',
      to: '2011',
    },
  ],
  publications: [
    //--{
    //  title: 'Publication Title',
    //  conferenceName: '',
    // journalName: 'Journal Name',
    //  authors: 'John Doe, Jane Smith',
    //  link: 'https://example.com',
    //  description:
    //    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    //},
    //{
    //  title: 'Publication Title',
    //  conferenceName: 'Conference Name',
    //  journalName: '',
    //  authors: 'John Doe, Jane Smith',
    //  link: 'https://example.com',
    //  description:
    //    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    //}, 
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
