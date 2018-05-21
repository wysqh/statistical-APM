import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Kong Ming Data Analysis Platform',
    group: true,
  },
  {
    title: 'UI Features',
    icon: 'nb-keypad',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Buttons',
        link: '/pages/ui-features/buttons',
      },
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Modals',
        link: '/pages/ui-features/modals',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
      {
        title: 'Tabs',
        link: '/pages/ui-features/tabs',
      },
    ],
  },
  {
    title: 'Performance Analysis',
    icon: 'nb-paper-plane',
    children: [
      {
        title: 'Application Analysis (Min)',
        link: '/pages/perform-ays/appays',
      },
      {
        title: 'Application Statistics',
        link: '/pages/perform-ays/appserv',
      },
      {
        title: 'Interface Analysis',
        link: '/pages/perform-ays/seriays',
      },
    ],
  },
  {
    title: 'Nutch Extension Service',
    icon: 'nb-lightbulb',
    children: [
      {
        title: 'Focused Crawling',
        link: '/pages/nutch-extension/crawl',
      },
      {
        title: 'Name Entity Recognition(NER)',
        link: '/pages/nutch-extension/ner',
      },
      {
        title: 'Face Recognition',
        link: '/pages/nutch-extension/face-rec',
      },
    ],
  },
  {
    title: 'Task List',
    icon: 'nb-tables',
    children: [
      // {
      //   title: 'Smart Table',
      //   link: '/pages/tables/smart-table',
      // },
      {
        title: 'History Tasks',
        link: '/pages/tables/tasks',
      },
    ],
  },
  {
    title: 'History Statistics',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Global Statistics',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Application Statistics',
        link: '/pages/charts/chartjs',
      },
      // {
      //   title: 'D3',
      //   link: '/pages/charts/d3',
      // },
    ],
  },
  {
    title: 'Forms',
    icon: 'nb-compose',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
    ],
  },
  {
    title: 'Components',
    icon: 'nb-gear',
    children: [
      {
        title: 'Tree',
        link: '/pages/components/tree',
      }, {
        title: 'Notifications',
        link: '/pages/components/notifications',
      },
    ],
  },
  // {
  //   title: 'Maps',
  //   icon: 'nb-location',
  //   children: [
  //     {
  //       title: 'Google Maps',
  //       link: '/pages/maps/gmaps',
  //     },
  //     {
  //       title: 'Leaflet Maps',
  //       link: '/pages/maps/leaflet',
  //     },
  //     {
  //       title: 'Bubble Maps',
  //       link: '/pages/maps/bubble',
  //     },
  //   ],
  // },
  // {
  //   title: 'Editors',
  //   icon: 'nb-title',
  //   children: [
  //     {
  //       title: 'TinyMCE',
  //       link: '/pages/editors/tinymce',
  //     },
  //     // {
  //     //   title: 'CKEditor',
  //     //   link: '/pages/editors/ckeditor',
  //     // },
  //   ],
  // },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
