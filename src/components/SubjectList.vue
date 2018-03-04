<template>
  <v-container>
    <template v-for="subject in subjectData">
      <subject-card 
        :title="subject.titlu"
        :img-src="subject.imgSrc"
        :to="subject.linkTo"
        :key="subject.id"
        class="subject-card"
      />
    </template>
  </v-container>
</template>

<script>
import firebase from "firebase/app";
import SubjectCard from "./SubjectCard";

export default {
  components: {
    "subject-card": SubjectCard
  },
  data: function() {
    return {
      subjects: {}
    };
  },
  computed: {
    // Ia doar strictul necesar din tot obiectul 'discipline'
    subjectData: function() {
      let parsedData = [];
      Object.entries(this.subjects).map(([key, val]) => {
        parsedData.push({
          titlu: val.titlu,
          imgSrc: val.imageURL,
          linkTo: "/subjects/" + key
        });
      });
      return parsedData;
    }
  },
  created() {
    firebase
      .database()
      .ref("/discipline")
      .on("value", snapshot => {
        this.subjects = snapshot.val();
      });
  }
};
</script>

<style scoped>
.subject-card {
  margin-bottom: 1rem;
}

.subject-card:nth-last-child(1) {
  margin-bottom: 0;
}
</style>
