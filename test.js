// 인스턴스 생성
const car1 = new Car();
const car2 = new Car();



class Car{
    constructor(){
        car1 instanceof Car;
        car1 instanceof Array;
    }
    
}

// es6에서 새롭에 클래스를 만드는 방법
// 제조사와 모델데이터, 변속기능을 추가해봅시다.
class car{
    constructor(make, model){
        this.make = make;
        this.model = model;
        this.userGears = ['P','N','R','D'];
        this.userGears = this.userGears[0];
        carProps.set(this,{userGears:this._userGears[0]});
    }
    shift(gear){
        if(this.userGears.indexOf(gear) < 0)
        throw new Error(`Invalid gear:${gear}`);
        this.userGears = gear;
    }
}



const Car = (function(){
    const carProps = new WeakMap();

    class Car{
        constructor(make, model){
            this.make = make;
            this.model = model;
            this._userGears = ['P','N','R','D'];
            this.userGears = this.userGears[0];
            carProps.set(this, {userGears:this._userGears[0]});
        }
        get userGear(){
            return carProps.get(this).userGear;
        }
        set userGear(value){
            if(this._userGears.indexOf(value) < 0 )
            throw new Error(`Invalid gear:${value}`);
            carProps.get(this).userGear = value;
        }
        shift(gear){
            this.userGear = gear;
        }
    }
        return Car;
    })();
    console.log(Car);






    const SYM = Symbol();
    const o = {a:1,b:2,c:3,[SYM]:4};
    Object.keys(o).forEach(prop => console.log(`${prop}:${o[prop]}`));

    const o = {apple:1, iphonex:2,iphonexs:3,galaxys3:4,lgg7:5};

    Object.keys(o)
    .filter(prop=>prop.match(/^i/))
    .forEach(prop=>console.log(`${prop}:${o[prop]}`));