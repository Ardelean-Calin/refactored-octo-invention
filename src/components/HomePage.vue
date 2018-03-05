<template>
  <div>
    <div 
      class="news-container primary" 
      style="padding: 1rem; padding-bottom: 2.5rem">
      <v-card 
        height="100%" >
        <v-card-title primary-title>
          <h3 class="headline">Anunțul actual</h3>
        </v-card-title>
        <v-divider/>
        <v-card-text class="news-card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, soluta? 😊
        </v-card-text>
        <div class="author">Ardelean Călin</div>
        <v-card-actions class="card-action-buttons">
          <v-spacer/>
          <v-btn icon>
            <v-icon>check</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>close</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>edit</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <v-container 
      fluid
      grid-list-lg >
      <v-layout 
        row
        wrap
        style="margin-top: -2.5rem">
        <v-flex 
          xs6>
          <v-card 
            :to="'/subjects'"
            ripple
            class="action-card" 
            height="10rem">
            <v-layout 
              row
              wrap>
              <v-flex 
                xs12
                d-flex
                align-center>
                <v-icon 
                  size="6rem" 
                  color="secondary">book</v-icon>
              </v-flex>
              <v-flex xs12>
                <div class="text-xs-center">
                  <v-badge>
                    <span 
                      v-if="reviewBadge"
                      slot="badge">{{ reviewBadge }}</span>
                    <h3 class="title title-text">Materii</h3>
                  </v-badge>
                </div>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex 
          xs6>
          <v-card 
            :to="'/schedule'"
            ripple
            class="action-card" 
            height="10rem">
            <v-layout 
              row
              wrap>
              <v-flex 
                xs12
                d-flex
                align-center>
                <v-icon 
                  size="6rem" 
                  color="secondary">date_range</v-icon>
              </v-flex>
              <v-flex xs12>
                <h3 class="title text-xs-center title-text">Orar</h3>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import firebase from "firebase/app";

export default {
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
.author {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 600;
  font-size: larger;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 40%;
}

.headline {
  color: rgba(0, 0, 0, 0.7);
  font-weight: 700;
}

.card-action-buttons {
  /* display: inline-block; */
  position: absolute;
  right: 0px;
  bottom: 0px;
}
.news-container {
  height: 20rem;
}

.news-card-text {
  /* text-align: justify; */
  font-size: larger;
}

.title-text {
  color: rgba(0, 0, 0, 0.65);
  font-weight: 600;
}
</style>
