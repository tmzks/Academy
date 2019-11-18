//function  함수를 의미
//function a 라고 하면 a라는 함수을 선언
//a()라는 함수를 호출 했을 때 중괄호 {}안에 있는 내용이 실행됨

/*
function a(){
    console.log("안녕");
}
//함수호출
a();
*/

/*
function ims(name){
    console.log("제 이름은 "+name+" 입니다");
}
ims("이진욱");
*/
// function ims(name,age){
//     console.log("제 이름은 "+name+" 이고 "+age+" 입니다.");
// }
// ims("이진욱", 22);

//문제 : 2019년은 기해년 입니다(2019, 기해년)
function dayy(year,gugu){
    console.log(year+"년은 "+gugu+" 입니다");
}
dayy(2019, "기해년");      // ※데이터타입 주의

function exam(x,y){
    var z = x+y;
    return z;
 }
console.log("값을 더한 값은 " +exam(20, 30)+ " 입니다.");

function exam(x,y){
    var z = x-y;
    return z;
 }
console.log("값을 뺀 값은 " +exam(20, 30)+ " 입니다.");

function exam(x,y){
    var z = x/y;
    return z;
 }
console.log("값을 나눈 값은 " +exam(20, 30)+ " 입니다.");

function exam(x,y){
    var z = x*y;
    return z;
 }
console.log("값을 곱한 값은 " +exam(20, 30)+ " 입니다.");

function exam(x,y){
    var z = x%y;
    return z;
 }
console.log("두값을 나눈후 나머지 값은 " +exam(10, 3)+ " 입니다.");

