<template>
  <div class="tel">
    <h2>{{ compteur }}</h2>
    <div>
      <span v-if="personneAppel">{{ personneAppel.pseudo }}</span>
      <span v-else> inconnue</span>
    </div>
    <!-- <router-link to="/Form">Ajouté contact</router-link>  -->
    <div class="clavier">
      <div class="numero">
        <button @click="increment(1)">1</button>
        <button @click="increment(2)">2</button>
        <button @click="increment(3)">3</button>
      </div>
      <div class="numero">
        <button @click="increment(4)">4</button>
        <button @click="increment(5)">5</button>
        <button @click="increment(6)">6</button>
      </div>
      <div class="numero">
        <button @click="increment(7)">7</button>
        <button @click="increment(8)">8</button>
        <button @click="increment(9)">9</button>
      </div>
      <div class="numero">
        <button @click="increment(0)">0</button>
      </div>
    </div>
    <br />
    <form @submit="call">
      <button type="submit">appeler</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "app",

  data() {
    return {
      compteur: "",
      formcall: {
        pseudo: "inconnu",
        numero: "",
        heure: "",
      },
    };
  },
  computed: {
    personneAppel() {
      return this.$store.state.personnages.find(
        (perso) => perso.numero === this.compteur
      );
    },
  },
  methods: {
    increment(chiffre) {
      this.compteur = this.compteur + chiffre;
    },
    call() {
      if (this.personneAppel) {
        this.formcall.pseudo = this.personneAppel.pseudo;
      }
      this.formcall.numero = this.compteur;
      this.formcall.heure = new Date().toLocaleString();
      this.$store.commit("call", this.formcall);
      // Envoi du formulaire
      this.formcall = {
        pseudo: "inconnu",
        numero: "",
        heure: "",
      };
    },
  },
};
</script>

<style scoped>

.tel{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}
button{
  background: #42b983;
  border-radius: 12px;
  color: white;
}
.clavier {
  margin: 10px;
  width: 350px;
  height: 250px;
  display: flex;
  flex-direction: column;
}
.numero {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
}
.numero button {
  width: 45px;
  height: 45px;
}
form button{
  width: 105px;
  height: 45px;
}
span {
  display: flex;
  align-items: center;
  font-size: 25px;
  color: white;
}
h2{
  display: flex;
  align-items: center;
  font-size: 15px;
  color: white;
}
</style>
