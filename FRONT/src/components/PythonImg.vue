<template>
  <div>
    <h1>{{ msg }}</h1>
    <!-- <p>Title : {{title}}</p> -->
    <!-- Plain mode -->
    <b-form-file v-model="file" class="mt-3" plain></b-form-file>
    <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div><br />
    <button @click.stop="apievent">요청</button><br /><br />
    <h3>Api 요청 결과 값 : {{ apiresult }}</h3>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'PythonImg',
  data () {
    return {
      msg: 'Digit Image Upload & Inference',
      apiresult: 'Waiting',
      file: null
    }
  },
  methods: {
    async apievent () {
      const formdata = new FormData()
      formdata.append('file', this.file)

      const { data } = await axios.post(
        'http://localhost:3010/api/pythonGet/imgUpload',
        formdata,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
      console.log(data)

      // this.apiresult = this.file.name
      // console.log(this.file)
    }
  }
}
</script>
