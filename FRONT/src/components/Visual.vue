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
        <div class="container">
          <Bar v-if="loaded==true" :chart-data="chartData" />
        </div>
        <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
      <!-- <h3>Result :<br /> {{apiresult}}</h3> -->
      {{apiresult}}
    </div>
</template>

<script>
import axios from 'axios'
import { Bar } from 'vue-chartjs'
import Chart from 'chart.js'
Chart.pluginService.register()
// ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  extends: Bar,
  components: { Bar },
  data () {
    return {
      msg: 'Visual Data',
      apiresult: 'Waiting',
      loaded: false,
      chartData: null,
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
      // props: ['chartdata',
      //   {
      //     scales: {
      //       yAxes: [{ ticks: { beginAtZero: true }, gridLines: { display: true } }],
      //       xAxes: [{ gridLines: { display: false } }]
      //     },
      //     legend: { display: true },
      //     responsive: true,
      //     maintainAspectRatio: false
      //   }]
    }
  },
  methods: {
    async apievent () {
      let compselected = {comp: this.selected}
      console.log('Selected COMP_ID is ', this.selected)
      if (this.selected != null) {
        const {data} = await axios.post('http://localhost:3010/api/Visual/comp/', compselected)
        this.apiresult = data
        this.loaded = true
      } else {
        this.apiresult = 'Please select COMP_ID to satisfy WHERE clause.'
        this.loaded = false
      }
      this.chartData = this.apiresult
      console.log(this.loaded)
      console.log('charData: ', this.chartData)
      // const {data} = await axios.post('http://localhost:3010/api/Visual/comp/', compselected)
      // // console.log(data)
      // this.apiresult = data
    }
  }
}
</script>
