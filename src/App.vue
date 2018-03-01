<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <v-divider></v-divider>
      <v-list>
        <template v-for="navlink in navigationLinks">
          <v-list-tile :to="{ path: navlink.route }" :key="navlink.id">
            <v-list-tile-action>
              <v-icon>{{ navlink.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ navlink.name }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="primary">
      <v-toolbar-side-icon class="white--text" @click="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <router-view class="view"></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      navigationLinks: [
        {
          name: "Acasă",
          route: "/",
          icon: "home"
        },
        {
          name: "Listă Discipline",
          route: "/subjects",
          icon: "book"
        },
        {
          name: "Orar",
          route: "/schedule",
          icon: "date_range"
        }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>