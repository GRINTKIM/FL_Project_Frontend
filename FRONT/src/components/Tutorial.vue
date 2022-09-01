<template>
    <div>
        <h1>{{ msg }}</h1>
        <p>Title : {{title}}</p>
        <input v-model="title" placeholder="input title here">
        <p>Description : {{description}}</p>
        <input v-model="description" placeholder="input description here"><br /><br />
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
  name: 'Tutorial',
  data () {
    return {
      msg: 'Tutorial',
      title: '',
      description: '',
      apiresult: '대기 중'
    }
  },
  methods: {
    async apievent () {
      const {data} = await axios.get('http://localhost:3010/api/getTest1/tutorial?title=' + this.title + '&description=' + this.description)
      console.log(data)
      this.apiresult = 'Insert 완료!'
    }
  }
}
</script>
