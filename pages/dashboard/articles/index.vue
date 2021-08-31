<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="headline">Articles</div>
        <v-breadcrumbs
          class="pa-0"
          :items="$store.state.breadcrumb.article.list"
        />
      </v-col>
      <v-col cols="12">
        <v-btn color="primary" to="/articles/create">
          <v-icon left small>mdi-plus</v-icon>
          New article
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
