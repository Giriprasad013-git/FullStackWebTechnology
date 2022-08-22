// console.log("hello")
// alert("Hi....")
// prompt("say hi")
// confirm("are u ok")
// document.write("no")
//
// global scope
// var a;
// a = 20;
// var a;
// a = 30;
// console.log(a)
//
// local scope
// let a;
// a = 10;
// console.log(a)
//
// constant
// const a = 30;
// console.log(a)
// console.log(`"Lorem ipsum dolor sit amet consectetur adipisicing elit.\n Dolorum, accusamus. Repellat a atque quis quos? Assumenda\n praesentium pariatur fuga voluptatibus, illo libero nesciunt quisquam\n ipsum eligendi, minus nulla quasi tempora."`)
// console.log(1112232)
// 
//
// undefined datatype
// var a = null;
// console.log(typeof a)
// var b;
// console.log(typeof b)
// console.log(typeof true)
// console.log(typeof 1)
// console.log(typeof)

//
// let a = prompt()
// console.log(a)
//

//

// console.log(`Is he eligible`)
// var a = parseInt(prompt("To check are u eleigible for Driving Licence licence \nenter the age"))
// console.log(a)
// if (a > 18) {
//     document.write("eligible")
// } else {
//     document.write("Not eligible")
// }
//

//
// var a = 20;
// var b = 30;
// var b = 50;
// var a = 200;
// let g = 200;
// var c = 30;
// g = 300;
// const d = 2;
// // d = 6;
// console.log(c)
// console.log(a)
// console.log(b)
// console.log(g)
// console.log(d)
// 
// 


//
// let name = "nihal,suresh,mahesh";
// let size = name.replace("nihal", "girish");
// console.log(size);
// document.write(size);
//
//
// let name = "nihal,suresh,mahesh";
// let size = name.substr(6, 6);
// console.log(size);
// document.write(size);
// 
// 
// let name = "nihal,suresh,mahesh";
// let size = name.toUpperCase();
// console.log(size);
// document.write(size);
// 
// 
// let name = "nihal,suresh,mahesh";
// let size = name.charAt(10);
// console.log(size);
// document.write(size);
// 
//
// let name = "nihal,suresh,mahesh";
// let size = name.concat(",hi");
// console.log(size);
// document.write(size);
//
// 
// let name = "                 mahesh             ";
// let size = name.trim();
// console.log(name);
// console.log(size);
// document.write(size);

// 
// let name = "Giriprasad";
// let start = name.padStart(18, " Patil ");
// let end = name.padEnd(18, " Patil ");
// console.log(name);
// console.log(start);
// console.log(end);
// document.write(end);
// 
// // 
// const cars = ["Saab", "Volvo", "BMW"];
// const b = cars.slice(0, 2);
// console.log(b);
//
// let a = [10, 20, 30, 40]
// a[3] = 50;
// console.log(a)
//     // a.pop();
//     // a.shift();
//     // a.unshift(0, 11);
// console.log(a)
//
// let text = "Hello world, welcome to the universe.";
// let result = text.includes("world");
// console.log(result);
//
// var cars = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
// console.log("Origional array : ", cars);
// //
// //  splice:
// cars.splice(2, 0, 'ambassedor', 'BMW', 'Audi');
// console.log("splice : ", cars);
// //
// // slice:
// var car = cars.slice(0, 3);
// console.log("slice : ", car);
//
// 
// String reverse
// var a = "Hello"
// console.log(a)
// var b = a.split("")
//     // console.log(b)
// var c = b.reverse()
//     // console.log(c)
// var d = c.join("")
// console.log(d)
// 

// // Sorting the array
// var cars = ['F', 'E', 'D', 'C', 'B', 'A'];
// // console.log(cars.sort());
// var n = [12, 45, 34, 88447, 22555, 23, 11, 77];
// console.log(n.sort())
//     // 
// 
// var n = [12, 45, 34, 88447, 22555, 23, 11, 77];

// n.sort((a, b) => {
//     if (a < b) {
//         return -1;
//     }
//     if (a > b) {
//         return 1;
//     }
//     return 0;
// });

// n.sort((a, b) => a - b);
// console.log(n)
// =
// 
// 
// Object creation there are two types
// 1 st one
// let myCar = {
//     make: 'Ford',
//     model: 'Mustang',
//     year: 1969,
//     address: {
//         place: 'bla bla bla',
//         pincode: 110011
//     }
// }
// console.log(myCar.address.place)
//     // Object.freeze(myCar)
// Object.seal(myCar)
// myCar.make = 'Hundya'
// console.log(myCar.make) //we cant change freezed value
//
// var obj = {
//     // assigns 10 to value
//     value: 10
// };
// // creates a non-extensible object
// Object.seal(obj);
// // the value gets updated to 20
// console.log(obj)
// obj.value = 20;
// console.log(obj)
// console.log(obj.value);
//          
// 2 nd one
// const myCar = new Object();
// myCar.make = 'Ford';
// myCar.model = 'Mustang';
// myCar.year = 1969;
// console.log(myCar)
//
// let myCar = {
//         make: 'Ford',
//         model: 'Mustang',
//         year: 1969,
//         address: {
//             place: 'bla bla bla',
//             pincode: 110011
//         }
//     }
// console.log(myCar.address["place"])
// let a = "address";
// let b = "pincode";
// console.log(myCar[a][b])
//     //
// const entries = Object.entries(myCar)
// console.log(myCar)
// console.log(Object.getOwnPropertyNames(myCar))
// console.log(Object.getPrototypeOf(myCar))
// console.log(Object.getOwnPropertySymbols(myCar))
// console.log(Object.isFrozen(myCar))
// console.log(Object.isSealed(myCar))
// Object.freeze(myCar)
// console.log(Object.isExtensible(myCar))
// console.log(Object.preventExtensions(myCar))
// console.log(Object.prototype.hasOwnProperty(myCar))
// console.log(Object.prototype.isPrototypeOf(myCar))
// console.log(Object.prototype.valueOf(myCar))
// 
// 
// DEEPCOPY
// let copy = JSON.parse(JSON.stringify(myCar)) //DeepCopy
// copy.make = "Kia";
// console.log("copy : ", copy)
// console.log("myCar : ", myCar)
// 
// 
// SHALLOWCOPY
// let copy = myCar; //ShallowCopy
// copy.make = "Kia";
// console.log("copy : ", copy)
// console.log("myCar : ", myCar)
// 
//
//FUNCTIONS 1
// var obj = {
//     firstname: "Giriprasad",
//     lastname: "Patil",
//     fullname: function giri() {
//         return this.firstname + " " + this.lastname;
//     }
// }
// var a = giri();
// console.log(a)
// 
// FUNCTION 2
// var a = 4;
// function odd(a) {
//     if (a % 2 != 0) {
//         return true;
//     }
//     return false;
// }
// console.log(odd(a))
// 
//FUNCTION 3 (Arrow function)
// let a = (() => console.log("Giri"));
// a()
// 
//FUNCTION 4 ( colling with parenthisis)
(function giri() {
    console.log("Hello");
})
()