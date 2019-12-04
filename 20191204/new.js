// function 안녕(){
//     setTimeout(()=>alert("안녕하세요우"),3000);
    
// }

// function 안녕2(){
//     setInterval(()=>alert("아직 계십니까?"),3000);
// }



// // 안녕();
// 안녕2();

const a = document.querySelector("body");
//색을 배열로 지정
let color_list = ["1.jpg","2.jpg","3.jpg","4.jpg"];
let i = 0;
a.style.backgroundImage = color_list[i];
setInterval(()=>{let random = Math.ceil(Math.random()*(4-1)+1);
    a.style.backgroundImage = color_list[random];
    // console.log(random);
},1000);
