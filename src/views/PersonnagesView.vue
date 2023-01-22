<template>
  <router-link to="/Form"> <h2>Add contact</h2></router-link> 
  <div class="contact">
    <div class="list_contact">
      <h4>Liste de contact</h4>
      <div class="cartes">
        <div v-for="perso in personnages" :key="perso.pseudo">
          <CartePerso :perso="perso" @lancerAppel="commitAppel" />
        </div>
      </div>
    </div>
    <div class="list_recent">
      <h4>Appel recents</h4>
      <div class="cartes">
        <div v-for="appel in called" :key="appel.pseudo">
          <CarteAppel :appel="appel" @lancerAppel="commitAppel" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CartePerso from "../components/CartePerso.vue";
import CarteAppel from "../components/CarteAppel.vue";
export default {
  name: "PersonnagesView",
  components: {
    CartePerso,
    CarteAppel,
  },
  computed: {
    personnages() {
      return this.$store.state.personnages;
    },
    called() {
      return this.$store.state.called;
    },
  },
  methods: {
    commitAppel(appel) {
      this.$store.commit("call", appel);
    },
  },
};
</script>
<style>
.contact{
  display: flex;
  flex-direction: row;
  width: 100%;
}
.list_contact{
  display: flex;
  flex-direction: column;
  width: 50%;
}
.list_recent{
  display: flex;
  flex-direction: column;
  width: 50%;
}
button {
  background: none;
  border: none;
}
.cartes {
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
h4 {
  font-size: 25px;
  color: white;
}
img {
  width: 25px;
  height: 25px;
}
a{
  text-decoration: none;
  color: white;
}
</style>
