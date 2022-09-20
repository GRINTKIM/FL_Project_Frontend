<template>
    <div>
        <h1>{{msg}}</h1><br />
        <div style="margin: 0px 10px 10px"><!-- 테이블 및 버튼 여백 생성 -->
            <div style="float:right; margin: 0px 0px 10px;"><!-- 버튼과 테이블 사이 여백 생성 -->
                <b-input-group>
                    <b-input-group-prepend>
                        <b-button variant="outline-primary" v-on:click="dataSelect()">조회</b-button>
                    </b-input-group-prepend>
                    <b-input-group-prepend>
                        <b-button variant="outline-info" v-on:click="dataInsert()">추가</b-button>
                    </b-input-group-prepend>
                    <b-input-group-prepend>
                        <b-button variant="outline-info" v-on:click="dataSave()">저장</b-button>
                    </b-input-group-prepend>
                    <b-input-group-append>
                        <b-button variant="outline-secondary">수정</b-button>
                    </b-input-group-append>
                    <b-input-group-append>
                        <b-button variant="outline-danger">삭제</b-button>
                    </b-input-group-append>
                </b-input-group><br />
            </div>
            <div>
                <b-table v-if=showdata striped borderd :items="items" :fields="fields">
                    <template v-if=showinsert slot="top-row" slot-scope="{ fields }">
                        <!-- <td v-for="field in fields" :key="field.key"> -->
                        <td>
                            <b-form-input v-model="insertitem1" placeholder="Enter Age"></b-form-input>
                        </td>
                        <td>
                            <b-form-input v-model="insertitem2" placeholder="Enter First Name"></b-form-input>
                        </td>
                        <td>
                            <b-form-input v-model="insertitem3" placeholder="Enter Last Name"></b-form-input>
                        </td>
                    </template>
                </b-table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Board',
  data () {
    return {
      msg: 'Board',
      apiresult: '요청 안함',
      column: ['age', 'first_name', 'last_name'],
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' }
      ],
      showdata: false,
      showinsert: false,
      insertitem1: null,
      insertitem2: null,
      insertitem3: null
    }
  },
  methods: {
    async dataSelect () {
      this.showdata = true
    },
    async dataInsert () {
      this.showinsert = true
    },
    async dataSave () {
      this.items.push({age: this.insertitem1, first_name: this.insertitem2, last_name: this.insertitem3})
      this.insertitem1 = ''
      this.insertitem2 = ''
      this.insertitem3 = ''
      this.showinsert = false
    }
  }
}
</script>
