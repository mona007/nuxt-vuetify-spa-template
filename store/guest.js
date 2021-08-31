export const state = () => ({
  guests: [],
  loading: false,
});

export const mutations = {
  SET_LOADING(state, payload) {
    state.loading = payload;
  },
  SET_GUESTS(state, payload) {
    state.guests = payload;
  },
};

export const actions = {
  findAll({ commit }) {
    commit('SET_LOADING', true);
    this.$axios
      .$get('/api/users')
      .then(({ data }) => {
        const guests = data.map((x) => ({
          id: x.id,
          avatar: x.avatar,
          name: `${x.first_name} ${x.last_name}`,
          email: x.email,
        }));
        commit('SET_GUESTS', guests);
      })
      .finally(() => {
        commit('SET_LOADING', false);
      });
  },
};
