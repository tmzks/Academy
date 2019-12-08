const timer = document.querySelector(".now");
timer.innerHTML = "00:00:00";

function start(){
//새로운 날짜를 생성하고 생성한 날짜를 date라는 상수에 저장
const date = new Date();

// console.log(date.getHours()); //시간
// console.log(date.getMinutes()); //분
// console.log(date.getSeconds()); //초



const h = date.getHours();
const m = date.getMinutes();
const s = date.getSeconds();

// console.log(h);
// console.log(m);
// console.log(s);

timer.innerHTML = `${h}:${m}:${s}`;
}
setInterval(start,1000);