<template>
  <div>
    <button @click="add">+1</button>
    <button @click="inc">-1</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      num:{
        a:0
      },
      count:{
        b:0
      }
    }
  },
  methods:{
    add(){
      this.num.a++;
    },
    inc(){
      this.count.b--;
    }
  },
  watch:{
    // 监听一个值的变化
    "num.a"(){
      console.log(this.num.a)
    },
    count: {
      handler(newVal, oldVal){
        console.log(this.count.b)
      },
    deep: true,
    immediate: true//是否首次加载时执行一次监听
    }
  },
  beforeRouteEnter(to,from,next){
    console.log('进入组件内路由')
    console.log(to)
    console.log(from)
    next()
  },
  beforeRouteUpdate(to,from,next){
    console.log('组件复用时执行')
    // 对于一个带有参数的路由/watch/：id，在/watch/1和/watch/2之间跳转时触发
    console.log(to)
    console.log(from)
    next()
  },
  beforeRouteLeave(to,from,next){
    console.log('离开组件内路由')
    console.log(to)
    console.log(from)
    next()
  }
}
</script>