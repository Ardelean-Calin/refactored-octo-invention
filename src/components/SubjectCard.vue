<template>
  <v-badge 
    v-model="showBadge"
    color="green"
    right
    overlap>
    <v-card :to="to">
      <v-card-media
        :src="imgSrc"
        height="125px"
      />
      <v-card-title primary-title>
        <div class="title mx-auto">{{ title }}</div>
      </v-card-title>
    </v-card>
    <span slot="badge">{{ numberNotifications }}</span>
  </v-badge>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    imgSrc: {
      type: String,
      default: ""
    },
    to: {
      type: String,
      default: "/subjects"
    }
  },
  data: function() {
    return {
      numberNotifications: 1
    };
  },
  computed: {
    showBadge: function() {
      return this.numberNotifications > 0;
    }
  }
};
</script>

<style scoped>
.title {
  text-align: center;
}
</style>
