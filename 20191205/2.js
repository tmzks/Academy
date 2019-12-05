let t = document.querySelector(".ac");
t.innerHTML = "00:00:00";

setInterval(()=>{
const date = new Date();
const h = date.getHours();
const m = date.getMinutes();
const s = date.getSeconds();

console.log(h);
console.log(m);
console.log(s);

t.innerHTML = `${h}:${m}:${s}`;

},1000);
