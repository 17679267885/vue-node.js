<template>
  <div id="app">
    <mu-appbar :title="title" class="title" :zDepth="zDepth">
      <mu-icon-button class="hh-icon" slot="right" target="blank">

      </mu-icon-button>
    </mu-appbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      title: '电影列表',
      zDepth: 2
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.title {
  letter-spacing: 1px;
  text-align: left;
}

.hh-icon:hover {
  opacity: .8;
}
</style>
