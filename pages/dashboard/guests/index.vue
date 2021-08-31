<template>
  <v-container class="align-self-start">
    <v-row>
      <v-col cols="12">
        <div class="headline">Guests</div>
        <v-breadcrumbs
          class="pa-0"
          :items="$store.state.breadcrumb.guest.list"
        />
      </v-col>
      <v-col cols="12">
        <div class="d-flex flex-column flex-sm-row justify-sm-space-between">
          <div>
            <v-btn color="primary" to="/guests/create">
              <v-icon left small>mdi-plus</v-icon>
              New guest
            </v-btn>
          </div>

          <div class="d-flex pt-4 pt-sm-0">
            <v-btn class="mr-2" outlined>
              <v-icon>mdi-filter</v-icon>
            </v-btn>
            <div class="flex-grow-1">
              <v-text-field
                dense
                outlined
                hide-details
                :placeholder="placeholder.search"
              />
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12">
        <client-only>
          <ui-table :loading="loading" :headers="table.headers" :items="guests">
            <template #[`item.name`]="{ item }">
              <div class="py-2">
                <v-avatar class="mr-2">
                  <v-img :src="item.avatar" :alt="item.name" />
                </v-avatar>
                {{ item.name }}
              </div>
            </template>
            <template #[`item.action`]>
              <v-btn icon>
                <v-icon small>mdi-pencil</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon small>mdi-delete</v-icon>
              </v-btn>
            </template>
          </ui-table>
        </client-only>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      table: {
        headers: [
          { text: 'ID', value: 'id' },
          { text: 'Name', value: 'name' },
          { text: 'E-mail', value: 'email' },
          { text: 'Action', value: 'action', sortable: false, align: 'center' },
        ],
        // items: this.$store.state.genre.genres,
      },
      placeholder: {
        search: 'Enter name,email,phone',
      },
    };
  },
  computed: {
    guests() {
      return this.$store.state.guest.guests;
    },
    loading() {
      return this.$store.state.guest.loading;
    },
  },
  mounted() {
    this.$store.dispatch('guest/findAll');
  },
  methods: {},
};
</script>
