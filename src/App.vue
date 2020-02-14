<template>　 <!--ここでコンポーネントを読み込んでいく、大元のvue-->

  <div id="app">

    <p>Kaito Takeuchi</p>

    <div id="nav">
       <!--to~~はurlの名前になる-->
      <router-link to="/">Home</router-link> <!--views/home-->
      <router-link to="/about">About</router-link> <!--views/about-->
      <router-link to="/works">Works</router-link> <!--views/works-->
      <router-link to="/contact">contact</router-link> <!--views/contact-->
    </div>

    <router-view/> <!--クリックしたvueが表示される-->
   </div>



</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:80%;
  margin: auto;
  vertical-align: middle;
  height: auto;
  margin-top: 50px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav a{
  color:red;
}
</style>
