export const state = () => ({
  article: {
    list: [
      { text: 'Dashboard', disabled: false, to: '/dashboard' },
      {
        text: 'Articles',
        disabled: true,
        exact: true,
        to: '/dashboard/articles',
      },
    ],
    create: [
      { text: 'Dashboard', disabled: false, to: '/dashboard' },
      {
        text: 'Articles',
        disabled: false,
        exact: true,
        to: '/dashboard/articles',
      },
      {
        text: 'Create article',
        disabled: true,
        exact: true,
        to: '/dashboard/articles/create',
      },
    ],
  },
  genre: {
    list: [
      { text: 'Dashboard', disabled: false, to: '/dashboard' },
      { text: 'Genres', disabled: true, exact: true, to: '/dashboard/genres' },
    ],
    create: [
      { text: 'Dashboard', disabled: false, to: '/dashboard' },
      { text: 'Genres', disabled: false, exact: true, to: '/dashboard/genres' },
      {
        text: 'Create genre',
        disabled: true,
        exact: true,
        to: '/dashboard/genres/create',
      },
    ],
  },
  guest: {
    list: [
      { text: 'Dashboard', disabled: false, to: '/dashboard' },
      { text: 'Guests', disabled: true, exact: true, to: '/dashboard/guests' },
    ],
    create: [
      { text: 'Dashboard', disabled: false, to: '/dashboard' },
      { text: 'Guests', disabled: true, exact: true, to: '/dashboard/guests' },
      {
        text: 'Create guest',
        disabled: true,
        exact: true,
        to: '/guests/create',
      },
    ],
  },
});
