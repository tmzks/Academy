//잘붙어있는지 확인차 로그남김
// console.log("aaaa");
//이미지를 불러와서 페이지 접솔 할 때마다 혹은 새로고침 할때마다 새로운 이미지를 불러오는 페이지 생성

//랜덤
/*
console.log(Math.random()); //0에서 1사이 랜덤한 숫자발생
console.log(Math.random() * 10); //랜덤함수에 10을 곱해서 정수를 출력
console.log(Math.floor(12.1)); // 소수점 뒤를 버림  (12)
console.log(Math.ceil(12.1)); //소수점 숫자를 걍 올려버림  (13)
console.log(Math.round(12.1)); //반올림 (12)
console.log(Math.floor(Math.random()*10)); //랜덤나온 값에 소수점 뒤를 전부 버리겠다는 뜻
console.log(Math.floor(Math.random()*(6-1)+1));  //1~5까지 정수를 출력(랜덤)

*/


let rand = Math.floor(Math.random()*(6-1)+1);
console.log(rand);

//image라는 상수에 img태그를 설정
const image = document.querySelector(".target");
//image에 들어갈 이미지 소스를 src로 설정
image.src = `${rand}.jpg`;