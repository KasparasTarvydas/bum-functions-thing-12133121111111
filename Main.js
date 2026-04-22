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
        if (a&&lowest > a) {
            lowest =  a
        }
        if (b&&lowest > b) {
            lowest =  b
        }
        if (c&&lowest > c) {
            lowest =  c
        }
        return lowest    
    }
    function vid(a,b,c){
        let dude = a+b+c
        let airtmetinis = dude/3
        return airtmetinis
    }
    let maz = thing(2,6,4)
    let res = vid(6,maz,7)
    console.log("vid",res);
}
const d6 = () => {
    function thing(a){
        return a+1
    }
    let res = thing(2)
    console.log(res);
}

d1(); d2(); d3(); d4(); d5(); d6()
