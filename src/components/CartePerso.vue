<template>
  <div>
    <h2>{{ perso.pseudo }}</h2>
    <span>Numero : {{ perso.numero }}</span>
    <button @click="lancerAppel" type="submit">appeler</button>
  </div>
</template>
<script>
export default {
  name: "CartePerso",
  props: ["perso"],
  methods: {
    lancerAppel() {
      this.$emit("lancerAppel", {
        pseudo: this.perso.pseudo,
        numero: this.perso.numero,
        heure: new Date().toLocaleString(),
      });
    },
  },
};
</script>
<style scoped>
div {
  margin: 10px;
  width: 350px;
  height: 50px;
  background-color: #42b983;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
h2 {
  display: flex;
  align-items: center;
  font-size: 15px;
}
span {
  display: flex;
  align-items: center;
  font-size: 10px;
}
</style>
Dans
