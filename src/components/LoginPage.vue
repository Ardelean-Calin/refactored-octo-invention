<template>
  <div class="main-container">
    <div class="header">
      <v-icon 
        size="6rem" 
        dark>person</v-icon>
      <h1>Autentificare</h1>
    </div>
    <div class="form-container">
      <v-form>
        <v-text-field  
          v-model="email"
          :error-messages="errorMessageEmail"
          label="E-mail"
          @input="errorMessageEmail = []"
        />
        <v-text-field 
          v-model="password"
          :append-icon="passVisible ? 'visibility_off' : 'visibility'" 
          :append-icon-cb="() => (passVisible = !passVisible)" 
          :type="passVisible ? 'text' : 'password'" 
          :error-messages="errorMessagePassword"
          label="Parolă" 
          @input="errorMessagePassword = []"/>
      </v-form>
      <v-btn 
        :disabled="!validInput"
        class="primary btn" 
        @click="signIn" 
      >Autentifică-te</v-btn>
      <a>Nu ai cont? Inregistrează-te</a>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";

const minPassLength = 8;

export default {
  data: function() {
    return {
      passVisible: false,
      email: "",
      password: "",
      errorMessageEmail: [],
      errorMessagePassword: []
    };
  },
  computed: {
    validInput: function() {
      return this.email.length > 0 && this.password.length >= minPassLength;
    }
  },
  methods: {
    signIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(err => {
          switch (err.code) {
          case "auth/user-not-found":
            this.errorMessageEmail = "Acest e-mail nu există";
            break;
          case "auth/wrong-password":
            this.errorMessagePassword = "Parolă greșită";
            break;
          case "auth/invalid-email":
            this.errorMessageEmail = "Format e-mail invalid";
            break;
          default:
            break;
          }
        })
        .then(user => {
          // User is undefined if login failed.
          if (user) this.$router.push("/");
        });
    }
  }
};
</script>

<style scoped>
form {
  width: 100%;
  padding: 1.5rem 0;
}

a {
  padding: 0.5rem 0;
}

.header {
  height: 10rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #18aa8d;
}

h1 {
  width: 100%;
  font-size: 2.3rem;
  text-align: center;
  color: white;
  letter-spacing: 0.1px;
  font-weight: 400;
}

.main-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: white;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  max-width: 20rem;
}

.btn {
  width: 100%;
}
</style>
