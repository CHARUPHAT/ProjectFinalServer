<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  margin: 0px;   
  height: 100vh;
}
button{
  color: aliceblue;
  background-color: #F4A460;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  border-radius: 5px;
  border-color: #FF9967;
}
button:hover {
  box-shadow: 0 10px 12px 0 rgba(0,0,0,0.25);
}
</style>
