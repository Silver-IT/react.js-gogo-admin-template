const data = [
  {
    id: 'dashboards',
    icon: 'iconsminds-shop-4',
    label: 'menu.dashboards',
    to: '/app/dashboards',
    subs: [
      {
        icon: 'simple-icon-briefcase',
        label: 'menu.default',
        to: '/app/dashboards/default',
      },
      {
        icon: 'simple-icon-pie-chart',
        label: 'menu.analytics',
        to: '/app/dashboards/analytics',
      },
      {
        icon: 'simple-icon-basket-loaded',
        label: 'menu.ecommerce',
        to: '/app/dashboards/ecommerce',
      },
      {
        icon: 'simple-icon-doc',
        label: 'menu.content',
        to: '/app/dashboards/content',
      },
    ],
  },
  {
    id: 'pages',
    icon: 'iconsminds-digital-drawing',
    label: 'menu.pages',
    to: '/app/pages',
    subs: [
      {
        id: 'pages-authorization',
        label: 'menu.authorization',
        to: '/user',
        subs: [
          {
            icon: 'simple-icon-user-following',
            label: 'menu.login',
            to: '/user/login',
            newWindow: true,
          },
          {
            icon: 'simple-icon-user-follow',
            label: 'menu.register',
            to: '/user/register',
            newWindow: true,
          },
          {
            icon: 'simple-icon-user-following',
            label: 'menu.forgot-password',
            to: '/user/forgot-password',
            newWindow: true,
          },
          {
            icon: 'simple-icon-user-unfollow',
            label: 'menu.reset-password',
            to: '/user/reset-password',
            newWindow: true,
          },
        ],
      },
      {
        id: 'pages-product',
        label: 'menu.product',
        to: '/app/pages/product',
        subs: [
          {
            icon: 'simple-icon-credit-card',
            label: 'menu.data-list',
            to: '/app/pages/product/data-list',
          },
          {
            icon: 'simple-icon-list',
            label: 'menu.thumb-list',
            to: '/app/pages/product/thumb-list',
          },
          {
            icon: 'simple-icon-grid',
            label: 'menu.image-list',
            to: '/app/pages/product/image-list',
          },
          {
            icon: 'simple-icon-picture',
            label: 'menu.details',
            to: '/app/pages/product/details',
          },
          {
            icon: 'simple-icon-book-open',
            label: 'menu.details-alt',
            to: '/app/pages/product/details-alt',
          },
        ],
      },
      {
        id: 'pages-profile',
        label: 'menu.profile',
        to: '/app/pages/profile',
        subs: [
          {
            icon: 'simple-icon-share',
            label: 'menu.social',
            to: '/app/pages/profile/social',
          },
          {
            icon: 'simple-icon-link',
            label: 'menu.portfolio',
            to: '/app/pages/profile/portfolio',
          },
        ],
      },
      {
        id: 'pages-blog',
        label: 'menu.blog',
        to: '/app/pages/blog',
        subs: [
          {
            icon: 'simple-icon-share',
            label: 'menu.blog-list',
            to: '/app/pages/blog/blog-list',
          },
          {
            icon: 'simple-icon-link',
            label: 'menu.blog-detail',
            to: '/app/pages/blog/blog-detail',
          },
        ],
      },
      {
        id: 'pages-miscellaneous',
        label: 'menu.miscellaneous',
        to: '/app/pages/miscellaneous',
        subs: [
          {
            icon: 'simple-icon-question',
            label: 'menu.faq',
            to: '/app/pages/miscellaneous/faq',
          },
          {
            icon: 'simple-icon-graduation',
            label: 'menu.knowledge-base',
            to: '/app/pages/miscellaneous/knowledge-base',
          },

          {
            icon: 'simple-icon-diamond',
            label: 'menu.prices',
            to: '/app/pages/miscellaneous/prices',
          },
          {
            icon: 'simple-icon-magnifier',
            label: 'menu.search',
            to: '/app/pages/miscellaneous/search',
          },
          {
            icon: 'simple-icon-envelope-open',
            label: 'menu.mailing',
            to: '/app/pages/miscellaneous/mailing',
          },
          {
            icon: 'simple-icon-bag',
            label: 'menu.invoice',
            to: '/app/pages/miscellaneous/invoice',
          },

          {
            icon: 'simple-icon-exclamation',
            label: 'menu.error',
            to: '/error',
            newWindow: true,
          },
        ],
      },
    ],
  },
  {
    id: 'applications',
    icon: 'iconsminds-air-balloon-1',
    label: 'menu.applications',
    to: '/app/applications',
    subs: [
      {
        icon: 'simple-icon-check',
        label: 'menu.todo',
        to: '/app/applications/todo',
      },
      {
        icon: 'simple-icon-calculator',
        label: 'menu.survey',
        to: '/app/applications/survey',
      },
      {
        icon: 'simple-icon-bubbles',
        label: 'menu.chat',
        to: '/app/applications/chat',
      },
    ],
  },
  {
    id: 'ui',
    icon: 'iconsminds-pantone',
    label: 'menu.ui',
    to: '/app/ui',
    subs: [
      {
        id: 'ui-forms',
        label: 'menu.forms',
        to: '/app/ui/forms',
        subs: [
          {
            icon: 'simple-icon-notebook',
            label: 'menu.layouts',
            to: '/app/ui/forms/layouts',
          },
          {
            icon: 'simple-icon-puzzle',
            label: 'menu.components',
            to: '/app/ui/forms/components',
          },
          {
            icon: 'simple-icon-check',
            label: 'menu.validations',
            to: '/app/ui/forms/validations',
          },
          {
            icon: 'simple-icon-magic-wand',
            label: 'menu.wizard',
            to: '/app/ui/forms/wizard',
          },
        ],
      },
      {
        id: 'ui-components',
        label: 'menu.components',
        to: '/app/ui/components',
        subs: [
          {
            icon: 'simple-icon-bell',
            label: 'menu.alerts',
            to: '/app/ui/components/alerts',
          },
          {
            icon: 'simple-icon-badge',
            label: 'menu.badges',
            to: '/app/ui/components/badges',
          },
          {
            icon: 'simple-icon-control-play',
            label: 'menu.buttons',
            to: '/app/ui/components/buttons',
          },
          {
            icon: 'simple-icon-layers',
            label: 'menu.cards',
            to: '/app/ui/components/cards',
          },
          {
            icon: 'simple-icon-picture',
            label: 'menu.carousel',
            to: '/app/ui/components/carousel',
          },
          {
            icon: 'simple-icon-chart',
            label: 'menu.charts',
            to: '/app/ui/components/charts',
          },
          {
            icon: 'simple-icon-arrow-up',
            label: 'menu.collapse',
            to: '/app/ui/components/collapse',
          },
          {
            icon: 'simple-icon-arrow-down',
            label: 'menu.dropdowns',
            to: '/app/ui/components/dropdowns',
          },
          {
            icon: 'simple-icon-book-open',
            label: 'menu.editors',
            to: '/app/ui/components/editors',
          },

          {
            icon: 'simple-icon-star',
            label: 'menu.icons',
            to: '/app/ui/components/icons',
          },
          {
            icon: 'simple-icon-note',
            label: 'menu.input-groups',
            to: '/app/ui/components/input-groups',
          },
          {
            icon: 'simple-icon-screen-desktop',
            label: 'menu.jumbotron',
            to: '/app/ui/components/jumbotron',
          },
          {
            icon: 'simple-icon-map',
            label: 'menu.maps',
            to: '/app/ui/components/maps',
          },
          {
            icon: 'simple-icon-docs',
            label: 'menu.modal',
            to: '/app/ui/components/modal',
          },
          {
            icon: 'simple-icon-cursor',
            label: 'menu.navigation',
            to: '/app/ui/components/navigation',
          },
          {
            icon: 'simple-icon-pin',
            label: 'menu.popover-tooltip',
            to: '/app/ui/components/popover-tooltip',
          },
          {
            icon: 'simple-icon-shuffle',
            label: 'menu.sortable',
            to: '/app/ui/components/sortable',
          },
          {
            icon: 'simple-icon-grid',
            label: 'menu.tables',
            to: '/app/ui/components/tables',
          },
        ],
      },
    ],
  },
  {
    id: 'menu',
    icon: 'iconsminds-three-arrow-fork',
    label: 'menu.menu',
    to: '/app/menu',
    subs: [
      {
        icon: 'simple-icon-logout',
        label: 'menu.types',
        to: '/app/menu/types',
      },
      {
        icon: 'simple-icon-layers',
        label: 'menu.levels',
        to: '/app/menu/levels',
        subs: [
          {
            icon: 'simple-icon-arrow-right',
            label: 'menu.third-level-1',
            to: '/app/menu/levels/third-level-1',
          },
          {
            icon: 'simple-icon-arrow-right',
            label: 'menu.third-level-2',
            to: '/app/menu/levels/third-level-2',
          },
          {
            icon: 'simple-icon-arrow-right',
            label: 'menu.third-level-3',
            to: '/app/menu/levels/third-level-3',
          },
        ],
      },
    ],
  },
  {
    id: 'blankpage',
    icon: 'iconsminds-bucket',
    label: 'menu.blank-page',
    to: '/app/blank-page',
  },
  {
    id: 'docs',
    icon: 'iconsminds-library',
    label: 'menu.docs',
    to: 'https://gogo-react-docs.coloredstrategies.com/',
    newWindow: true,
  },
];
export default data;
