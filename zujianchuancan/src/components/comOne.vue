<template>
  <div>我是组件son
    {{msg}}
    <button @click="fun()">
      点我
    </button>
  </div>
</template>
<script>
export default {
  props:[
    "msg"
  ],
  data(){
    return{
      i:"我是子组件"
    }
  },
  methods:{
    fun(){
      this.$emit('myClick',this.i)
    }
  }
}
</script>