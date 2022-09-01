<template>
    <div>
        <h1>{{ msg }}</h1>
        <p>join : {{join}}</p>
        <input v-model="join" placeholder="Input join type here">
        <!-- <div id="v-model-basic" class="demo">
            <span>title:</span><input v-model="title" placeholder="title" />
            </div>
        <div id="v-model-basic" class="demo">
            <span>description:</span><input v-model="description" placeholder="description" />
            </div><br /> -->
        <button @click.stop="apievent">요청</button>
        <h2>Api 요청 결과 값 : {{apiresult}}</h2>
    </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Join',
  data () {
    return {
      msg: 'Member Join',
      join: '',
      apiresult: '대기 중'
    }
  },
  methods: {
    async apievent () {
      let joinData = {join: this.join}
      console.log(joinData)
      const {data} = await axios.post('http://localhost:3010/api/PostgreDataTest1/memberjoin/', joinData)
      console.log(data)
      this.apiresult = data
    }
  }
}
</script>
