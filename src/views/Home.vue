<template>
<!-- コンポーネントの定義 -->
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/> <!--コンポーネント-->
  </div>
</template>


<script> /*componentsから読み込むコンポーネントを記述*/

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue' 

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
