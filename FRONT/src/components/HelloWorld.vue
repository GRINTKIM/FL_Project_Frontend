<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Api Test Link</h2>
      <a href="/#/ApiTest1"
         target="_blank"
         >
           ApiTest1
        </a>
    <h2>User Information Link</h2>
      <a href="/#/userInfo"
         target="_blank"
         >
           userInfo
        </a>
    <h2>Tutorial Link</h2>
      <a href="/#/Tutorial"
         target="_blank"
         >
           Tutorial
        </a>
    <h2>Member Join Link</h2>
      <a href="/#/JoinTest"
         target="_blank"
         >
           JoinTest
        </a>
    <h2>Visual Data Link</h2>
      <a href="/#/Visual"
         target="_blank"
         >
           Visual
        </a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
