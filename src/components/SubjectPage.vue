<template>
  <v-card flat>
    <v-card-media 
      :src="imgSrc" 
      height="200px"/>
    <v-card-title primary-title>
      <div>
        <h3 class="title"> {{ title }}</h3>
        <div class="description">
          <div
            @click="showDescription = !showDescription">
            <span class="description-expander-text">Descriere</span> 
            <v-icon 
              :class="{'icon-rotated': showDescription}"
              class="description-expander-icon" 
              dark
              small>keyboard_arrow_right
            </v-icon>
          </div>
          <div 
            :class="{'description-text-expanded': showDescription}" 
            class="description-text">
            {{ description }}
          </div>
        </div>
      </div>
    </v-card-title>
    <v-divider/>
  </v-card>
</template>

<script>
import firebase from "firebase/app";
export default {
  data: function() {
    return {
      title: "",
      description: "",
      imgSrc: "",
      showDescription: false
    };
  },
  created: function() {
    firebase
      .database()
      .ref("/discipline/" + this.$route.params.id)
      .on("value", snapshot => {
        this.title = snapshot.val().titlu;
        this.description = snapshot.val().descriere;
        this.imgSrc = snapshot.val().imageURL;
      });
  }
};
</script>

<style scoped>
.description {
  cursor: pointer;
  padding-top: 0.5rem;
}

.description-expander-text {
  color: rgba(0, 0, 0, 0.5);
  font-size: 1.2em;
  font-weight: 500;
}

.description-expander-icon {
  background-color: #18aa8d;
  border-radius: 50%;
  margin-bottom: 2px;
  padding: 2px;
  transition: transform 0.4s ease;
}

.description-text {
  color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  max-height: 0px;
  transition: max-height 0.4s ease;
  text-align: justify;
}

.description-text-expanded {
  /* This max-height property is fixed, unfortunately */
  max-height: 300px;
}

.icon-rotated {
  -moz-transform: rotate(90deg);
  transform: rotate(90deg);
}
</style>
