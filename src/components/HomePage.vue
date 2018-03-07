<template>
  <div>
    <news-card/>
    <v-container 
      fluid
      grid-list-lg >
      <v-layout 
        row
        wrap
        style="margin-top: -2.5rem">
        <v-flex 
          xs6>
          <mini-card 
            :badge="reviewBadge" 
            to="/subjects" 
            text="Discipline"
            icon="book"/>
        </v-flex>
        <v-flex 
          xs6>
          <mini-card 
            to="/shedule" 
            text="Orar"
            icon="date_range"/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import firebase from "firebase/app";
import NewsCard from "./NewsCard";
import MiniCard from "./MiniCard";

export default {
  components: {
    NewsCard,
    MiniCard
  },
  data: function() {
    return {
      toReview: []
    };
  },
  computed: {
    reviewBadge: function() {
      return this.toReview.length;
    }
  },
  created: function() {
    firebase.auth().onAuthStateChanged(user => {
      this.userID = user.uid;
      firebase
        .database()
        .ref("/users/" + this.userID)
        .on("value", snapshot => {
          let toReview = [];
          snapshot.child("toReview").forEach(snap => {
            if (snap.val()) toReview.push(snap.key);
          });
          this.toReview = toReview;
          this.$forceUpdate();
        });
    });
  }
};
</script>

<style scoped>
</style>
