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
          label="E-mail" 
          focus/>
        <v-text-field 
          :append-icon="passVisible ? 'visibility_off' : 'visibility'" 
          :append-icon-cb="() => (passVisible = !passVisible)" 
          :type="passVisible ? 'text' : 'password'" 
          label="Parolă" 
          hint="Minim 8 caractere" 
          min="8" 
          counter/>
      </v-form>
      <v-btn class="primary btn">Autentifică-te</v-btn>
      <a>Nu ai cont? Inregistrează-te</a>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      passVisible: false
    };
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
