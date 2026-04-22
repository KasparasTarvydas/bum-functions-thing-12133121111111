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






//const namee = prompt("ivesk varda");
//console.log(namee);

//alert("labas", $(namee),"geros dienos")


const e1 = () => {
    const n1 = prompt("nr1");
    const n2 = prompt("nr2");
    alert(n1*1+n2*1)
}
const e2 = () => {
    const n = prompt("ivesk sk")
    alert((n*1)*(n*1))
}
const e3 = () => {
    const n = prompt("Ivesk skaiciu 2")
    if (n*1 == 2) {
        alert("Teisingai")
    } else {
        alert("NETEISINGAI")
    }
}
const e4 = () => {
    const n1 = prompt("Ivesk zodi 1")
    const n2 = prompt("Ivesk zodi 2")
    alert(n1+" "+n2)
}
const e5 = () => {
    const n = prompt("ivesk sk")
    if ((n*1)%2 == 0){
        alert("Lyiginis")
    }else{
        alert("Nelyiginis")
    }
}
const e6 = () => {
    
}
const e7 = () => {

}
const e8 = () => {
    
}
e1(); e2(); e3(); e4(); e5(); e6(); e7(); e8(); 
