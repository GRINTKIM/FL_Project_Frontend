<template>
    <div>
      <h1>{{ msg }}</h1>
        <b-form-select v-model="selected" :options="options"></b-form-select>
        <button @click.stop="apievent">요청</button>
        <GChart type="ColumnChart" :data="chartData" :options="chartOptions" />
        <div class="mt-3">Selected: <strong>{{ selected }}</strong></div><br  />
      <!-- <h3>Result :<br /> {{apiresult}}</h3> -->
      Result: {{apiresult}}
    </div>
</template>

<script>
import axios from 'axios'
// import { GChart } from 'vue-google-charts'
import { GChart } from 'vue-google-charts/legacy'

export default {
  name: 'Visual',
  components: { GChart },
  data () {
    return {
      msg: 'Visual Data',
      apiresult: 'Waiting',
      // loaded: false,
      selected: null,
      chartData: null,
      // chartData: [
      //   ['Year', 'Sales', 'Expenses', 'Profit'],
      //   ['2014', 1000, 400, 200],
      //   ['2015', 1170, 460, 250],
      //   ['2016', 660, 1120, 300],
      //   ['2017', 1030, 540, 350]
      // ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017'
        }
      },
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
      console.log('Selected COMP_ID is ', this.selected)
      if (this.selected != null) {
        const { data } = await axios.post('http://localhost:3010/api/Visual/comp/', compselected)
        this.apiresult = data
        const dt = [['DATE_T', 'TOTALCNT']]

        for (var i = 1; i < data.length; i++) {
          dt[i] = []
          dt[i].push(data[i].DATE_T)
          dt[i].push(Number(data[i].TOTALCNT))
        }

        console.log('dt: \n', dt)
        this.chartData = dt
      } else {
        this.apiresult = 'Please select COMP_ID to satisfy WHERE clause.'
      }
      // console.log('chartData: ', this.dt)
      // console.log(this.apiresult)
    }
  }
}
</script>
