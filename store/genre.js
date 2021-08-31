export const state = () => ({
  genres: [
    {
      id: 1,
      title: 'Entertainment',
      createdAt: '2021-08-01 04:01:00PM',
      createdBy: 'Mona',
    },
    {
      id: 2,
      title: 'Social',
      createdAt: '2021-08-01 04:01:00PM',
      createdBy: 'Mona',
    },
    {
      id: 3,
      title: 'Sport',
      createdAt: '2021-08-01 04:01:00PM',
      createdBy: 'Mona',
    },
    {
      id: 4,
      title: 'Technology',
      createdAt: '2021-08-01 04:01:00PM',
      createdBy: 'Mona',
    },
  ],
});

export const actions = {
  findAll() {
    return this.$axios.$get('https://reqres.in/api/users');
  },
};
