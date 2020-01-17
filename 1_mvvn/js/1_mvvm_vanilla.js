/* 문제점

1.  사용 data와 html이 분리가 되어 있지 않아 
  → app이 커질 경우 복잡 하고 관리가 어려워짐. (hidden tag 등의 사용)

2. data가 html에 묶여 있어서 tag 이용(id,class를 통한 불러오기)이 강제 됨 
  → data 이용 과정이 복잡함.
3. data를 html에 나타내는 기능에 tag((id,class를 통한 데이터 binding) 이용이 강제됨 
  → data view에 나타내는 과정이 복잡함

*/

function increaseAndShowValue() {
  increase();
}
function decreaseAndShowValue() {
  decrease();
}
function increase() {
  var currentCnt = document.getElementById("currentCount").value;
  var changingCnt = document.getElementById("changingCount").value;

  var nextCnt = Number(currentCnt) + Number(changingCnt);
  document.getElementById("currentCount").value = nextCnt;

  document.getElementById("result").innerHTML = nextCnt;
}
function decrease() {
  var currentCnt = document.getElementById("currentCount").value;
  var changingCnt = document.getElementById("changingCount").value;

  var nextCnt = Number(currentCnt) - Number(changingCnt);
  document.getElementById("currentCount").value = nextCnt;

  document.getElementById("result").innerHTML = nextCnt;
}
