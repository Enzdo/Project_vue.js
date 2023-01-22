
<template>
  <div class="tablet">
    <div class="iconne">
      <router-view/>
    </div>
    <div class="outils">
      <nav>
      <router-link to="/"><img src="./img/home_logo.png" alt=""></router-link> 
      <router-link to="/Telephone"><img src="./img/appel.png" alt=""></router-link> 
      <router-link to="/Personnages"><img src="./img/contact.png" alt=""></router-link> 
    </nav>
    </div>
  </div>
</template>

<style>
.tablet{
  width: 80%;
  height: 80vh;
  border: 25px solid black;
  border-radius: 12px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('https://img.wallpapersafari.com/desktop/1280/1024/96/34/POYx58.jpg');
}
#app {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.iconne{
  height: 85%;
}

.outils{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12%;
  width: 100%;
}


nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  height: 90%;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.418);
}
nav img{
  width: 35px;
  height: 35px;
}

nav a {
  display: flex;
  align-items: center;
}

</style>
