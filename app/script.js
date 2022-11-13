// document.querySelector('button').onclick = () => {
//     console.log(document.querySelector('#one').value);
//     // style
//     document.querySelector('button').style.backgroundColor = document.querySelector('#one').value
// }

// document.querySelector('#one').oninput = () => {
//     console.log(document.querySelector('#one').value);
//     document.querySelector('span').innerHTML = document.querySelector('#one').value
// }

document.querySelector('#btn-1').onclick = () => {
    console.log(document.querySelector('#i2').value);
    let myCheckBox = document.querySelector('#i2');
    console.log(myCheckBox.checked);
    if (myCheckBox.checked) {
        console.log('Нажат');
    }
    else {
        console.log('Не Нажат');
    }
}

document.querySelector('#btn-2').onclick = (event) => {
    event.preventDefault();
    // let text = document.querySelector('#two');
    // console.log(text.value);
    // text.value = 'one';
    let form = document.querySelector('form');
    console.log(form);
    console.log(form.elements.two.value);
    console.log(form.elements.three.value);
}

const button1 = document.querySelector(".button-1")
button1.onclick = function f1 () {

   alert("№1")
  
}

const button2 = document.querySelector(".button-2")
button2.onclick = () => {
 alert("№2")   
}

const p3 = document.querySelector(".p-3")
p3.onclick = () => {
 alert("№3") 
}

const divout = document.querySelector(".task-4")
const button4 = document.querySelector(".button-4")
const myCheckBox4 = document.querySelector(".i-4")

button4.onclick = () => {
    if(myCheckBox4.checked){
     console.log(true)
    }
    else {
    console.log(false)
    }
}

const i6 = document.querySelector(".i-6")
const button6 = document.querySelector(".b-6")
 button6.onclick = () => {
    console.log(i6)
 }

 const i7 = document.querySelector(".i-7")
 const button7 = document.querySelector(".button-7")
 button7.onclick = () => {
    if (i7.value.length >= 6) {
      console.log("1")  
    }
  else {
    console.log("0")
  }
}

const i10 = document.querySelector(".i-10")
const button10 = document.querySelector(".button-10")
button10.onclick = () => {
  button10.style.background = i10.value
}


const divout8 = document.querySelector(".out-8")
const button8 = document.querySelector(".button-8")
button8.onclick = () => {
  divout8.innerHTML += '<input type="text" class = "i-81"></input>'
  divout8.innerHTML += '<button class = "b-81">b81</button>'
  }

  const r9 = document.querySelector(".r-9")
  const button9 = document.querySelector(".button-9")
  const out9 = document.querySelector(".out-9")
  button9.onclick = () => {
   if (r9.checked) {
    out9.value = r9.value
   } 
   else {
    out9.value = "0"
   }
  }

  const i111 = document.querySelector(".i-111")
  const i112 = document.querySelector(".i-112")
  const button11 = document.querySelector(".button-11")
  button11.onclick = () => {
    i112.value = i111.value
  }

const i12 = document.querySelector(".i-12")
const button12 = document.querySelector(".button-12")
const out12 = document.querySelector(".out-12")
button12.onclick = () => {
  out12.value = i12.value
}

// const i13 = document.querySelector(".i-13")
const out13 = document.querySelector(".out-13")
function myFunction (val) {
  out13.value = val
} 

const t14 = document.querySelector(".t-14")
const button14 =  document.querySelector(".button-14")
const out14 = document.querySelector(".out-14")
button14.onclick = () => {
out14.value = t14.value
}

const t15 = document.querySelector(".t-15")
const i15 = document.querySelector(".i-15")
const button15 = document.querySelector(".button-15")
const out15 = document.querySelector(".out-15")
button15.onclick = () => {
 t15.value = i15.value
out15.value = i15.value
}

const s16 = document.querySelector(".s-16")
const button16 = document.querySelector(".button-16")
const out16 = document.querySelector(".out-16")
button16.onclick = () => {
  out16.value = s16.value
}

const s17 = document.querySelector(".s-17")
const out17 = document.querySelector(".out-17")
function f17 () {
 out17.value = s17.value 
}

const s18 = document.querySelector(".s-18")
const i18 = document.querySelector(".i-18")
function f18 () {
    i18.value = s18.value
}

const i191 = document.querySelector(".i-191")
const i192 = document.querySelector(".i-192")
const out19 = document.querySelector(".out-19")
const button19 = document.querySelector(".button-19")
 button19.onclick = function f19 () {
   out19.value = ` ${i191.value} ${i192.value}`
     // out19.value = i191.value+ "" +i192.value
}

const i20 = document.querySelector(".i-20")
const p20 = document.querySelector(".p-20")
const button20 = document.querySelector(".button-20")
const out20 = document.querySelector(".out-20")

button20.onclick = function  f20 () {
    out20.innerHTML += `${i20.value} ${p20.value}`
}
