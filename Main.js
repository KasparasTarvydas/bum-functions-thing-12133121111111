function CountSum(){
    let sum = 5+3;
    return sum;
}
//funkcijos ekspresija
const CountSum2 = () => {
    let sum = 50+3
    return sum
}
//regular
const CountSum3 = function countingSum() {
    let sum = 100+3
    return sum
}
console.log(CountSum())
console.log(CountSum2());
console.log(CountSum3());
function Substraction(dude1, dude2){
    if (dude2 && dude2){
        let sum = dude1-dude2;
        return sum;
    }else if (! dude1 && ! dude2){
        return 0
    }else if (dude1){
        return dude1
    }else if (dude2){
        return dude2
    }
}
console.log(Substraction(13,6));





const d1 = () => {
    function hello(){
        console.log("Hello Wrodl");
    }
    hello()
}
const d2 = () => {
    function hello(name){
        console.log("Hello", name);
    }
    hello("kaspa")
    hello("kaspa")
    hello("zmoguaus")
}
const d3 = () => {
    let name = "kaspa"
    let age = 16
    function PrabegoMetai(){
        age += 1
        console.log(name,age);
    }
    PrabegoMetai()
    PrabegoMetai()
}
const d4 = () => {
    function thing(a,b,c){
        let lowest = a
        if (a&&lowest > a) {
            lowest =  a
        }else if (! a){lowest = b}
        
        if (b&&lowest > b) {
            lowest =  b
        } else if (! b) {lowest = c}

        if (c&&lowest > c) {
            lowest =  c
        }
        return lowest
    }
    console.log(thing(2,6,4));
}
const d5 = () => {
    function thing(a,b,c){
        let lowest = a
        let dude = a+b+c
        if (a&&lowest > a) {
            lowest =  a
            dude += a; dude2+=1
        }
        if (b&&lowest > b) {
            lowest =  b
            dude += b; dude2+=1
        }
        if (c&&lowest > c) {
            lowest =  c
        }
        let airtmetinis = dude/3
        return {lowest, airtmetinis}
    }
    let res = thing(2,6,4)
    console.log(res);
}
const d6 = () => {
    function thing(a){
        return a+1
    }
    let res = thing(2)
    console.log(res);
}

d1(); d2(); d3(); d4(); d5(); d6()