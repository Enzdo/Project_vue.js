<template>
    <h1>Add contact</h1>

    <form @submit.prevent="ajoutPerso">
      <input type="text" placeholder="Nom..." v-model="formPerso.pseudo">
      <input type="tel" placeholder="Numero" v-model="formPerso.numero">
      <button type="submit">Ajouter</button>
    </form>

</template>
<script>
export default {

  data(){
return {
  formPerso: {
    pseudo: "",
    numero: "",
  }
}
},
  
  methods:{
    ajoutPerso() {
    this.$store.commit('ajoutPerso' , this.formPerso);

    this.formPerso = {
      pseudo: "",
      numero: "",
    };
  },
}
}
</script>
<style scoped>
   form {
      width: 50vw;
      margin: 20px auto;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 10px;
      border-radius: 10px;
  }

  input {
      padding: 10px;
      border-radius: 10px;
      border: none;
  }
  button{
    background: none;
    border: none;
  }
   form button {
      padding: 10px;
      border-radius: 10px;
      border: none;
      background-color: #2c3e50;
      color: white;
      font-weight: bold;
  }
  .cartes {
      margin: 50px;
      padding: 20px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: space-around;
  }   
  h4{
    font-size: 25px;
  }
  img{
    width: 25px;
    height: 25px;
  }
  h1{
    color: white;
  }
</style>