<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>Api 요청 결과 값 : {{apiresult}}</h2>
        <button @click.stop="apievent">요청</button>
    </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'ApiTest1',
  data () {
    return {
      msg: 'ApiTest Part',
      apiresult: 'd'
    }
  },
  methods: {
    async apievent () {
      const {data} = await axios.get('http://localhost:3010/api/getTest1?age=25&gender=여')
      console.log(data)
      this.apiresult = data
    }
  }
}
</script>
