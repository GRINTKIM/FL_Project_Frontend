<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>Api 요청 결과 값 : {{apiresult}}</h2>
        <button @click.stop="apievent">요청</button>
    </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'userInfo',
  data () {
    return {
      msg: 'User Information Data',
      apiresult: '대기 중'
    }
  },
  methods: {
    async apievent () {
      const {data} = await axios.get('http://localhost:3010/api/PostgreDataTest1/userInfo')
      console.log(data)
      this.apiresult = data
    }
  }
}
</script>
