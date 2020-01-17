/* 
1. data를 html에 묶어둘 필요 없음 -- data와 view 분리 가능
2. data를 html에서 불러올 이유가 없어서 getElemnt등의 기능을 사용하지 않아도 됨.
3. data와 view 기능을 분리 가능
*/
var a = new Vue({
  el: "#container",
  /* 1, 2. */
  data: {
    currentCnt: 1,
    changingCnt: 1
  },
  /* model */
  methods: {
    increase() {
      this.currentCnt = this.currentCnt + this.changingCnt;
    },
    decrease() {
      this.currentCnt = this.currentCnt - this.changingCnt;
    }
  }
});
