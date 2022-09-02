<!-- <template>
    <div>
        <h1>{{ msg }}</h1>
          <select v-model="selected" multiple>
              <option :value="{name:'A'}">A</option>>
              <option :value="{name:'B'}">B</option>>
              <option :value="{name:'D'}">D</option>>
              <option :value="{name:'E'}">E</option>>
              <option :value="{name:'G'}">G</option>>
              <option :value="{name:'O'}">O</option>>
              </select><br /><br />
          <button @click.stop="apievent">요청</button>
        <h2>Api 요청 결과 값 : {{apiresult}}</h2>

    </div>
</template> --> 수정 전

<template>
    <div>
      <h1>{{ msg }}</h1>
        <b-form-select v-model="selected" :options="options"></b-form-select>
        <button @click.stop="apievent">요청</button>
        <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
      <!-- <h3>Result :<br /> {{apiresult}}</h3> -->
      {{apiresult}}
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Visual',
  data () {
    return {
      msg: 'Visual Data',
      apiresult: 'Waiting',
      selected: null,
      options: [
        { value: null, text: 'COMP_ID' },
        { value: 'A', text: 'A' },
        { value: 'B', text: 'B' },
        { value: 'D', text: 'D' },
        { value: 'E', text: 'E' },
        { value: 'G', text: 'G' },
        { value: 'O', text: 'O' }
      ]
    }
  },
  methods: {
    async apievent () {
      let compselected = {comp: this.selected}
      console.log(compselected)
      const {data} = await axios.post('http://localhost:3010/api/Visual/comp/', compselected)
      console.log(data)
      this.apiresult = data
    }
  }
}
</script>
