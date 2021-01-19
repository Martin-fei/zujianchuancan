<template>
  <div class="father">
    <com-one  @myClick="parentfun" :msg='msg'></com-one>
    <div></div>
    <com></com>
  </div>
</template>
<script>
import ComOne from '../components/comOne.vue'
export default {
  components:{
    ComOne
  },
  data(){
    return {
      msg:'我是父组件内容'
    }
  },
  methods:{
    parentfun(res){
      console.log(res)
    }
  }
}
</script>