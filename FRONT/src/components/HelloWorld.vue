<template>
  <div class="hello">
    <h1>{{ msg }}</h1><br />
    <h2>Api Test Link</h2>
      <a href="/#/ApiTest1"
         target="_blank"
         >
           ApiTest1
        </a><br /><br />
    <h2>User Information Link</h2>
      <a href="/#/userInfo"
         target="_blank"
         >
           userInfo
        </a><br /><br />
    <h2>Tutorial Link</h2>
      <a href="/#/Tutorial"
         target="_blank"
         >
           Tutorial
        </a><br /><br />
    <h2>Member Join Link</h2>
      <a href="/#/JoinTest"
         target="_blank"
         >
           JoinTest
        </a><br /><br />
    <h2>Data Visualization Link</h2>
      <a href="/#/Visual"
         target="_blank"
         >
           Visual
        </a><br /><br />
    <h2>Digit Image Upload & Inference</h2>
      <a href="/#/PythonImg"
         target="_blank"
         >
           PythonImg
        </a><br /><br /><br />
    <h2>Board</h2>
      <a href="/#/Board"
         target="_blank"
         >
           Board
        </a><br /><br /><br />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'FORMATION LABS Project'
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
