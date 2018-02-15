<template>
  <div>
    <div class="img-container">
      <img src="./assets/logo.png" />
      <h1>{{ helloMessage }}</h1>
      <h3>Count: {{ count }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      helloMessage: "Hello, World!",
      count: 0
    };
  },

  mounted() {
    console.log("[Log] Ready");
    this.handle = setInterval(() => {
      this.count++;
    }, 1000);
  },

  destroyed() {
    clearInterval(this.handle);
  }
};
</script>

<style scoped>
.img-container {
  width: "100%";
  text-align: center;
}
</style>