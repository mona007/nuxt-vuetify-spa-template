<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="headline">Create new article</div>
        <v-breadcrumbs
          class="pa-0"
          :items="$store.state.breadcrumb.article.create"
        />
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-row no-gutters>
              <v-col cols="12">
                <ui-label required>Title</ui-label>
                <v-text-field dense outlined :placeholder="placeholder.title" />
              </v-col>
              <v-col cols="12">
                <ui-label optional>Genre</ui-label>
                <v-select
                  dense
                  outlined
                  :items="genres"
                  :placeholder="placeholder.genre"
                ></v-select>
              </v-col>
              <v-col class="text-right" cols="12">
                <v-btn color="primary">
                  <v-icon left small>mdi-content-save</v-icon>
                  Create article
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      placeholder: {
        title: 'Top 10 technology in ' + new Date().getFullYear().toString(),
        genre: 'Technology',
      },
      genres: ['Sport', 'Technology'],
    };
  },
};
</script>
