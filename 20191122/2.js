// es6에서 변화된 문법

/*
변수 var -> let
상수 const
console 찍을때 역따옴표`${변수명}`으로 처리가 가능
화살표 함수
*/


//이것을 기본함수로 보고
function abc(a){
    return a+a;
}
var value = abc(5);
console.log(value);

//이것이 화살표 함수(인자가 한개일때)
const ggg = a => a+a;
const aaa = ggg(4);
console.log(aaa);

//화살표함수의 규칙
/*
 1. 매개변수가 하나일 경우에 한해서 인자를 정의할때 괄호를 생략할 수 있다.
 2. 매개변수가 없거나 둘 이상일 경우에는 괄호가 필요함 const ggg = (a,b) =>a+b; 이렇게 씀
 3. 화살표 함수 한문장으로 작성했을 때에 한해서 return문을 사용하지 않아도 되고
      리턴값은 화살표 오른쪽 표현식(=>)의 계산값이 된다.
 4. 화살표 함수 코드블록을 지정햇을 경우 리턴문을 작성해야 되고 작성하지 않았을때는 undefined에러가 발생함
*/

// 1번. 매개변수  x를 전달받아서 x*x의 결과를 반환하는 화살표함수를 정의하고 이 화살표함수를 실행한 결과값을 상수qqq에 저장
const qqq = x =>x*x;
console.log(qqq(6));
//2번. x와 y 두개의 매개변수를 가지는 화살표함수 =>매개변수가 2개이상이라서 괄호사용하고 위와 마찬가지로 한문장으로 끝나는 화살표 함수이므로 리턴값을 정해주지 않아도 된다.
const www = (x,y) => x*y;
console.log(www(20,30));
//화살표 함수내의 조건을 넣어보자
const sum = (...args) =>{
    let total = 0;
    for(let i = 0; i<args.length; i++){
        total+=args[i];
        }
        return total;
}
console.log(sum(1,2,3,4,5,6));