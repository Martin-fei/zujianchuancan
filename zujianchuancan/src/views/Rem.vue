<template>
  <div class="rem">
    <div></div>
  </div>
</template>
<style scoped>
.rem>div{
  width: 20rem;height: 100px;border: 1px solid #f00;
}
</style>
<script>
(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    if ((10 * (clientWidth / 750)) <= 20) { 
      docEl.style.fontSize = 10 * (clientWidth / 750) + 'px';
    }else{
      docEl.style.fontSize = 20 + 'px';
    }};
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window); 
export default {
  data(){
    return{}
  },
  
}
</script>