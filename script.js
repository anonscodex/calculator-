

let n1 = document.querySelector("#n1");
let n2 = document.querySelector("#n2");
let n3 = document.querySelector("#n3");
let n4 = document.querySelector("#n4");
let n5 = document.querySelector("#n5");
let n6 = document.querySelector("#n6");
let n7 = document.querySelector("#n7");
let n8 = document.querySelector("#n8");
let n9 = document.querySelector("#n9");
let dzero = document.querySelector("#dzero");
let zero = document.querySelector("#zero");
let point = document.querySelector("#point");
let equal = document.querySelector("#equal");
let ac = document.querySelector("#AC");
let de = document.querySelector("#DE");
let div = document.querySelector("#div");
let mod = document.querySelector("#mod");
let addbtn = document.querySelector("#addbtn");
let minusbtn = document.querySelector("#minusbtn");
let timesbtn = document.querySelector("#timesbtn")

let inputscreen = document.querySelector("#inputscreen");

n1.addEventListener('click', ()=> {
    no1 = '1';
    inputscreen.value += no1;

})
n2.addEventListener('click', ()=> {
    no2 = '2';
    inputscreen.value += no2;
})

n3.addEventListener('click', ()=> {
    no3 = '3';
    inputscreen.value += no3;
})

n4.addEventListener('click', ()=> {
    no4 = '4';
    inputscreen.value += no4;
})

n5.addEventListener('click', ()=> {
    no5 = '5';
    inputscreen.value += no5;
})

n6.addEventListener('click', ()=> {
    no6 = '6';
    inputscreen.value += no6;
})

n7.addEventListener('click', ()=> {
    no7 = '7';
    inputscreen.value += no7;
})

n8.addEventListener('click', ()=> {
    no8 = '8';
    inputscreen.value += no8;
})

n9.addEventListener('click', ()=> {
    no9 = '9';
    inputscreen.value += no9;
})

dzero.addEventListener('click', ()=> {
    ddzero = '00'  ;
    inputscreen.value += ddzero;
})

zero.addEventListener('click', ()=> {
    zeroo = '0';   
    inputscreen.value += zeroo;
})

point.addEventListener('click', ()=> {
    pointt = '.' ;
    inputscreen.value += pointt;
})

equal.addEventListener('click', ()=> {
    inputscreen.value = eval(inputscreen.value)
    console.log(inputscreen.value)
    
})

ac.addEventListener('click', ()=> {
    inputscreen.value = ''
})

de.addEventListener('click', ()=> {
    inputscreen.value = inputscreen.value.toString().slice(0,-1);
})

div.addEventListener('click', ()=> {
    divi = "/"
    inputscreen.value += divi;
    
})

addbtn.addEventListener('click', ()=> {
    add = "+";
    inputscreen.value += add;
    
})

minusbtn.addEventListener('click', ()=> {
    minus = "-"
    inputscreen.value += minus;
    
})

timesbtn.addEventListener('click', ()=> {
    times = "*";
    inputscreen.value += times;
    
})



mod.addEventListener('click', ()=> {
    modu = '%';
    inputscreen.value += modu;
})

//function displayOperator(operator) {
//inputscreen.value = operator;
//}


    

  



