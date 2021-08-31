<template>
  <v-container class="align-self-start">
    <v-row>
      <v-col cols="12">
        <div class="headline">Genres</div>
        <v-breadcrumbs
          class="pa-0"
          :items="$store.state.breadcrumb.genre.list"
        />
      </v-col>
      <v-col cols="12">
        <div class="d-flex flex-column flex-sm-row justify-sm-space-between">
          <div>
            <v-btn
              :block="$vuetify.breakpoint.mobile"
              color="primary"
              to="/genres/create"
            >
              <v-icon left small>mdi-plus</v-icon>
              New genre
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
        <ui-table :headers="table.headers" :items="table.items">
          <template #[`item.action`]>
            <v-btn icon>
              <v-icon small>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon small>mdi-delete</v-icon>
            </v-btn>
          </template>
        </ui-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      table: {
        headers: [
          { text: 'ID', value: 'id' },
          { text: 'Title', value: 'title' },
          { text: 'Description', value: 'description' },
          { text: 'Created Date', value: 'createdAt' },
          { text: 'Created By', value: 'createdBy' },
          { text: 'Action', value: 'action', sortable: false, align: 'center' },
        ],
        items: this.$store.state.genre.genres,
      },
      placeholder: {
        search: 'Enter title to search',
      },
    };
  },
  async mounted() {
    try {
      const data = await this.findAll();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
    // constthis.findAll()
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch(console.log);
  },
  methods: {
    ...mapActions('genre', ['findAll']),
  },
};
</script>
