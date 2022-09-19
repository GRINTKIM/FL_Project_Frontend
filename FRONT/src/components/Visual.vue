<template>
    <div>
      <h1>{{ msg }}</h1><br />
        <b-form-select v-model="selected" :options="options"></b-form-select>
        <div class="mt-3">Selected: <strong>{{ selected }}</strong></div><br  />
        <!-- <p>{{ date.month }}</p> -->
        <table style="margin:auto">
          <th>FROM</th>
          <th>TO</th>
          <tr>
            <td>{{ fromDate.from | yyyyMMdd }}</td>
            <td>{{ toDate.from | yyyyMMdd }}</td>
          </tr>
          <tr>
            <td><month-picker-input @change="showDateFrom"></month-picker-input></td>
            <td><month-picker-input @change="showDateTo"></month-picker-input></td>
          </tr>
        </table><br />
        <!-- <month-picker @change="showDate"></month-picker> -->
        <button @click.stop="apievent">요청</button><br /><br />
        <GChart type="ColumnChart" :data="chartData" :options="chartOptions" />
      <!-- <h3>Result :<br /> {{apiresult}}</h3> -->
      Result: <br />{{apiresult}}<br /><br />
    </div>
</template>

<script>
import axios from 'axios'
// import { GChart } from 'vue-google-charts'
import { GChart } from 'vue-google-charts/legacy'
import { MonthPicker, MonthPickerInput } from 'vue-month-picker'

export default {
  name: 'Visual',
  components: { GChart, MonthPicker, MonthPickerInput },
  data () {
    return {
      msg: 'Data Visualization',
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
          title: 'Data Visualization',
          subtitle: 'DATE_T, COMP_ID, TOTALCNT'
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
      ],
      fromDate: {
        from: null,
        to: null,
        month: null,
        year: null
      },
      toDate: {
        from: null,
        to: null,
        month: null,
        year: null
      }
    }
  },
  filters: {
    yyyyMMdd: function (value) {
      // 들어오는 value 값이 공백이면 공백으로 돌려줌
      if (value === '') return ''

      // 현재 Date 혹은 DateTime 데이터를 javaScript date 타입화
      var jsDate = new Date(value)

      // 연도, 월, 일 추출
      var year = jsDate.getFullYear()
      var month = jsDate.getMonth() + 1
      var day = jsDate.getDate()

      // 월, 일의 경우 한 자리 수 값이 있기 때문에 공백에 0 처리
      if (month < 10) {
        month = '0' + month
      }

      if (day < 10) {
        day = '0' + day
      }

      // 최종 포맷 (ex - yyyy-mm-dd)
      return year + '-' + month + '-' + day
    }
  },
  methods: {
    async apievent () {
      let compselected = {comp: this.selected, from: this.fromDate.from, to: this.toDate.to}
      console.log('Selected COMP_ID is ', this.selected)
      console.log(this.fromDate)

      if (this.selected != null) {
        const { data } = await axios.post('http://localhost:3010/api/Visual/comp/', compselected)
        this.apiresult = data
        const dt = [['DATE_T', 'TOTALCNT']]

        for (var i = 0; i < data.length; i++) {
          dt[i + 1] = []
          dt[i + 1].push(data[i].DATE_T)
          dt[i + 1].push(Number(data[i].TOTALCNT))
        }

        // console.log('dt: \n', dt)
        this.chartData = dt
      } else {
        this.apiresult = 'Please select COMP_ID to satisfy WHERE clause.'
      }
      // console.log('chartData: ', this.dt)
      // console.log(this.apiresult)
    },
    showDateFrom (fromDate) {
      this.fromDate = fromDate
    },
    showDateTo (toDate) {
      this.toDate = toDate
    },
    month (value) {
      // 들어오는 value 값이 공백이면 공백으로 돌려줌
      if (value === '') return ''

      // 현재 Date 혹은 DateTime 데이터를 javaScript date 타입화
      var jsDate = new Date(value)

      // 연도, 월, 일 추출
      var year = jsDate.getFullYear()
      var month = jsDate.getMonth() + 1
      var day = jsDate.getDate()

      // 월, 일의 경우 한 자리 수 값이 있기 때문에 공백에 0 처리
      if (month < 10) {
        month = '0' + month
      }

      if (day < 10) {
        day = '0' + day
      }

      // 최종 포맷 (ex - yyyy-mm-dd)
      return year + '-' + month + '-' + day
    }
  }
}
</script>
