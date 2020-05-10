<template>
  <div id="app">
    <fk-table :showHeader="true"></fk-table>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import FkTable from './components/fk-table/fk-table'

export default {
  name: 'App',
  components: {
    // FTable,
    // HelloWorld,
    FkTable
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
