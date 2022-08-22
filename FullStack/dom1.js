// const a = document.createElement('p');
// a.innerText = "Content inside DIV";
// document.body.appendChild(a);
// const ul1 = document.createElement('ul');
// const li1 = document.createElement('li');
// const li2 = document.createElement('li');
// const li3 = document.createElement('li');
// li1.textContent = "Hello";
// li2.textContent = "Hello";
// li3.textContent = "Hello";
// document.body.append(ul1);
// ul1.appendChild(li1);
// ul1.appendChild(li2);
// ul1.appendChild(li3);
// ul1.style.listStyleType = "square";
// ul1.style.backgroundColor = "pink";
// ul1.style.color = "red";
//



// let para1 = document.getElementById("para");
// para1.style.background = "blue";
// para1.textCon tent = "hallo";



// const para1 = document.getElementsByClassName("para");
// para1.style.background = "blue";
// para1[1].textContent = "hallo";
// document.body.append(para1)
// console.log(Array.isArray(para1))
// 



// const para1 = document.getElementById("aa");
// para1.textContent = "Hii";
// console.log(para1);
//
// 
// const para1 = document.getElementsByClassName('para')
// para1.textContent = "Hii";
// console.log(para1);
//
//  
// let que = document.querySelector('#aa');
// que.textContent = "hello";
// console.log(que);
// 
// 
// let a = ["giri", "aditya", "vijay", "mara"];
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }
// 
// 
// 
// let quea = document.querySelectorAll('#aa');//id
// let quea = document.querySelectorAll('.para');
// // quea.textContent = "hi";
// console.log(quea);
// console.log(Array.isArray(quea));
// let b = Array.from(quea);
// console.log(Array.isArray(b));
// b.forEach(Element => {
//     Element.style.backgroundColor = "red";
// })
// console.log(b)
//
//
//propartys
// function abc() {
//     document.body.style.backgroundColor = 'red'; // <p id="aa" onclick="abc()">Hi</p> //    <!-- <p id="aa" onmouseover="abc()">Hi</p> -->

// }
// function def() {
//     document.body.style.backgroundColor = "green";
// }
function imgg() {
    document.getElementById('img').style.display = 'block';
    document.getElementById('imgg').style.display = 'none';
}