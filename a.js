// if문을 사용해서 변수 a의 값이 10보다 크면 "10보다 큽니다" 작으면 "10보다 작습니다"출력
var a = prompt('값을 입력하시오');
if(a == 1){
    console.log("10보다 큽니다");
}else {
    console.log("10보다 작습니다.");
}

// switch문을 사용 => 변수b의 값이 case,1~5사이 출력 default허용범위
var b =2;
switch (b) {
    case 1:
        console.log('1입니다.');
        break;
    case 2:
        console.log('2입니다.');
        break;
    case 3:
        console.log('3입니다.');
        break;
    case 4:
        console.log('4입니다');
        break;
    case 5:
        console.log('5입니다.');    
        break;
    default:
        console.log('허용되지않습니다.');
        break;
}

//for문 변수  c, 21~50출력
for (var c = 21; c <51; c++){
    console.log(c);
}


//while 1부터 50출력
var h = 1;
while(h < 51){
    console.log(h);
    h++;
}