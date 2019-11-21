//es5
var name = "무지";
var age = 12;
console.log("안녕 나는 "+name+"이고"+age+" 살 입니다.");

//위의 것을 함수로 만들어봐랏
function ims(name,age){
        console.log("제 이름은 "+name+"이고 "+age+"살 입니다.");
    }
    ims("무지", 12);

//es6
let name = "라이언";
let age = 12;
function agg(){
    console.log(`안녕하세여 제 이름은 ${name}입니다 저는 올해 ${age} 살이에요`);
    console.log("hell my name is "+name+" and my age "+age);
    console.log("hell my name is ",name," and my age ",age);
}
agg();



function ff(name,age){
    console.log(`안녕하세여 제 이름은 ${name}입니다 저는 올해 ${age} 살이에요`);   
}
//상수 result로 함수를 호출한 결과를 저장
const result = ff("이진욱",25);
//저장한 값을 호출하게 되면 함수를 실행한 결과가 로그로 남는데 리턴값이 없으므로  undefined가 뜬다.
// console.log(result);

//new_hello라는 함수는 name 및 age라는 파라미터를 전달받아 실행되는 함수
function new_hello(lang,version){
    // 리턴값으로 문자열을 출력하고 해당 문자열 사이에 파라미터로 전달받은 값을 배치하여 출력
    return `이 ${lang}는 ES${version}으로 구성되어 있습니다.`;
}
const new_result = new_hello("자바스크립트",6);
// 실행결과 출력
console.log(new_result);

//plus라는 함수를 만들고 이 함수를 호출했을 때 파라미터의 합을 출력하도록 만들어 보세요
function plus(a,b){
    return a+b;
}
const pp = plus(2,8);
console.log(pp);