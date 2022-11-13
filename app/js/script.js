const a = document.querySelector(".out-1")
const a2 = document.querySelector(".i-1")
a2.onclick = function f1 () {
const a3 = a.value 
if (a3 == 4) {
console.log(true);
} 
else{
console.log(false);
}   
}

const b = document.querySelector(".out-2")
const b2 = document.querySelector(".i-2")
const a21 = 22
const a22 = 21
b2.onclick = function f2 () {
if(a21 > a22) {
console.log(a21)    
}  
else{
console.log(a22)    
}
}

const c = document.querySelector(".i-31")
const c2 = document.querySelector(".i-32")
const button3 = document.querySelector(".i-3")
button3.onclick = function f3 () {
    const c3 = +c.value
    const c4 = +c2.value 
    if (c3 > c4) {
    console.log(c3)
   }
else {
   console.log(c4) 
  } 
 }

const d = document.querySelector(".i-4")
const button4 = document.querySelector(".i-1-4")
button4.onclick = function f4 () {
 const d2 = d.value
 if (d2 >= 18) {
  console.log(1)

 }
 else {
   console.log(0) 
 }  
} 

const f = document.querySelector(".i-5")
const button5 = document.querySelector(".i-1-5")
button5.onclick = function f5 () {
  const f2 = f.value
    if (f2 < 0) {
    console.log("m")    
  }  
  else if (f2 == 0) {
   console.log(0)
  }
  else {
    console.log(1)
  }
}

const g = document.querySelector(".i-6")
const button6 = document.querySelector(".i-1-6")
button6.onclick = function f6 () {
 const g2 = 4 % 2 == 0
 const g3 = +g.value
 if (g3 == g2) {
  console.log("even")
 }    
 else {
   console.log("odd") 
 }
}

const n = document.querySelector(".i-71")
const n2 = document.querySelector(".i-72")
const button7 = document.querySelector(".i-1-7")
const out7 = document.querySelector(".out-7")
 button7.onclick = function f7 () {
    const n3 = n.value
     const n5 = n2.value
    const n4 = Math.pow(n3,n5)
     if (n3) {
         console.log(n4)
         out7.value = n4
     }
     else {

     }
 }

const m = document.querySelector(".s-8")
const button8 = document.querySelector(".i-1-8")
 button8.onclick = function f8 () {
 const m2 = +m.value
    switch (m2) {
        case 1:
       console.log("one")
       break;
        case 2:
            console.log("two")
            break;
        case 3:
            console.log("three")
    }
 }

 const s = document.querySelector(".i-9")
const button9 = document.querySelector(".i-1-9")
button9.onclick = function f9 () {
   const s2 = +s.value
   switch (true) {
       case s2 >= 1 && s2 <=32:
           console.log("one")
            break;
       case s2 >= 33 && s2 <= 43:
           console.log("two")
           break;
      //  // case 44- 64:
      //      console.log("three")
      //      break;
       default:
           console.log("0")
   }
}

const u = document.querySelector(".s-100")
const button10 = document.querySelector(".i-1-10")
button10.onclick = function f10 () {
  const u2 = +u.value
   if (u2){
      console.log(u2)
   }

}

// const p = document.querySelector(".s-110")


const select = document.querySelector(".select-11")
select.addEventListener('change', function () {
  console.log(this.value)
})

const input12 =  document.querySelector(".i-120" ) 
const button12 = document.querySelector(".i-1-12")
const div12 = document.querySelector(".out-12") 
button12.onclick = function f12 () {
  const testType =  +input12.value
  console.log(testType)
  // div12.innerHTML (typeof out12.value)
  div12.innerHTML = typeof +input12.value
}

const input13 = document.querySelector(".i-130")
const button13 = document.querySelector(".out-13")
button13.onclick = function f13 () {
const typeof1 =  button13.innerHTML = typeof input13.value
 console.log(typeof1)
}

const input141 = document.querySelector(".i-141")
const input142 = document.querySelector(".i-142")
const selects143 = document.querySelector(".s-143")
const button14 = document.querySelector(".b-14")
const out14 = document.querySelector(".out-14")

 button14.onclick = function f14 () {
  const select = selects143.value
  if(selects143.value === "-") {
   console.log(+input141.value - +input142.value)
   out14.innerHTML = +input141.value - +input142.value
  }
  else if(selects143.value === "+") {
    console.log(+input141.value + +input142.value)
   out14.innerHTML = +input141.value + +input142.value
   }
   else if(selects143.value === "*") {
    console.log(+input141.value * +input142.value)
   out14.innerHTML = +input141.value * +input142.value
   }
   else if(selects143.value === "/") {
    console.log(+input141.value / +input142.value)
   out14.innerHTML = +input141.value / +input142.value
   }
}

const input15 = document.querySelector(".i-15")
const button15 = document.querySelector(".button-15")
const selects151 = document.querySelector(".s-151")
const selects152 = document.querySelector(".s-152")
const selects153 = document.querySelector(".s-153")
button15.onclick = function f15 () {
if (selects153.value === "&&") {
console.log(+selects151.value && +selects152.value)
}
 else if (selects153.value === "||") {
  console.log(+selects151.value || +selects152.value)
 }
}

