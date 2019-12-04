let a = "first";
let b = "second";
let c = "third";
let d = "fouth";

// a부터 d까지 실행하는데 있어서 d가 통신문제로 인해 지연현상이 생긴다고 가정

function aa(){
    console.log(a);
    console.log(b);
    //setTimeout은 특정시간이후에 함수를 실행 시킬때 사용함.
    // setTimeout(함수명,딜레이시간); //딜레이 시간은 1000을 기준으로 하며 1000이 1초
    setTimeout(function g(){console.log(d)},2000);
    // setTimeout(()=>console.log(d),3000);
    console.log(c);
}
aa();