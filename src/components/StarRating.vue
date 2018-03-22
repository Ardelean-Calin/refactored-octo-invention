<template>
  <div>
    <v-icon 
      v-for="i in 5"
      :key="i" 
      x-large
      @click="submitRating(i)"
      class="star">{{ i <= rating ? "star" : "star_outline" }}</v-icon>
  </div>
</template>

<script>
export default {
  props: ["value"],
  data: function() {
    return {
      rating: 0
    };
  },
  methods: {
    submitRating(i) {
      this.rating = i;
      this.$emit("input", i);
    }
  }
};
</script>

<style scoped>
.star {
  color: #f1c40f;
}
</style>
