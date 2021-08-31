<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer.model"
      :clipped="drawer.clipped"
      :floating="drawer.floating"
      :mini-variant="drawer.mini"
      color="white"
      app
      overflow
    >
      <v-list dense>
        <v-list-item class="mb-10 px-2">
          <v-list-item-avatar class="white--text" color="primary">
            <div class="mx-auto">Logo</div>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" exact>
          <v-list-item-action v-if="drawer.mini">
            <v-tooltip right>
              <template #activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on">{{ item.icon }}</v-icon>
              </template>
              <span>{{ item.title }}</span>
            </v-tooltip>
          </v-list-item-action>

          <v-list-item-action v-else>
            <v-icon v-bind="attrs" v-on="on">{{ item.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title class="primary--text" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="drawer.clipped"
      class="elevation-0 justify-center"
      color="bg-container"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="onDrawer" />
      <v-spacer />
      <v-menu
        offset-y
        transition="slide-x-reverse-transition"
        close-on-content-click
        left
      >
        <template #activator="{ on }">
          <v-list dense class="ma-0 pa-0" color="bg-container">
            <v-list-item v-on="on">
              <v-list-item-content class="text-right mx-1">
                <v-list-item-title class="font-weight-bold primary--text">
                  Mona
                </v-list-item-title>
                <v-list-item-subtitle> Super Admin </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-avatar class="mx-2">
                <v-avatar color="primary" size="40">
                  <span class="white--text">MN</span>
                </v-avatar>
              </v-list-item-avatar>
              <v-list-item-icon class="my-auto mx-0">
                <v-icon> mdi-menu-down </v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </template>

        <v-list dense>
          <v-list-item to="/dashboard/profiles">
            <v-list-item-action>
              <v-icon>mdi-account-circle-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> Profile </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :selectable="true" @click="onLogout">
            <v-list-item-action>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> Logout </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main class="bg-container">
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: {
        model: true,
        clipped: false,
        floating: false,
        mini: true,
      },
      title: 'T',
      items: [
        {
          icon: 'mdi-view-dashboard-outline',
          title: 'Dashboard',
          to: '/dashboard',
        },
        {
          icon: 'mdi-account-group-outline',
          title: 'Guests',
          to: '/dashboard/guests',
        },
        {
          icon: 'mdi-shape-outline',
          title: 'Genres',
          to: '/dashboard/genres',
        },
        {
          icon: 'mdi-card-text-outline',
          title: 'Articles',
          to: '/dashboard/articles',
        },
      ],
    };
  },
  methods: {
    onDrawer() {
      if (this.drawer.model && !this.drawer.mini) {
        // this.title = 'N';
        this.drawer.mini = true;
      } else if (this.drawer.model && this.drawer.mini) {
        this.drawer.model = false;
      } else {
        // this.title = 'N';
        this.drawer.mini = false;
        this.drawer.model = true;
      }
    },
    onLogout() {},
  },
};
</script>
