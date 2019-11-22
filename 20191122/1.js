// 계산기 만들기
//multi함수를 만들고 multi 함수는 숫자 파라미터 2개를 받으며
//함수 호출시 return값으로 두 수의 곱을 리턴받아서 
// 최종 출력 두 수의 곱 수를 곱한 값
function multi(a,b){
    return a*b;
}
const aa = multi(20,40);
console.log(aa);

//ex2
function multi2(a,b){
    let aaa;
    aaa = a*b;
    return aaa;
}
console.log(multi2(20,50));




//종합 계산기 만들기
// const calc = {name:이진욱,age:25} 이렇게 선언한다.
// +,-,*,/기능을 객체로 구현 해당객체를 호출하게 되면 값을 return 하는 멀티 계산기를 만들어라
// 상수 calc 각 기능을 객체로 넣어서 선언
const calc = {
    //plus는 더하기 기능을 하는 객체로 a와 b를 더한 값을 리턴한다.
    plus:function(a,b){
        return a+b;
    },
    minus:function(a,b){
        return a-b;
    },
    multi:function(a,b){
        return a*b;
    },
    division:function(a,b){
        return a/b;
    }
}
const a = 10;
const b = 20;

const plus = calc.plus(a,b);
const minus = calc.minus(a,b);
const multi = calc.multi(a,b);
const division = calc.division(a,b);


console.log(plus);
console.log(minus);
console.log(multi);
console.log(division);