<template>
  <div>
    <navigation-bar/>
    <v-content>
      <router-view/>
    </v-content>
  </div>
</template>

<script>
import NavigationBar from "./NavigationBar";

export default {
  components: {
    NavigationBar
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
