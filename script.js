
// const num = {
//     name: 123
// };

// function testUs(elem) {
//     const num2 = { ...num };
//     elem.name += 1;
//     return num2
// }

// const ssd = testUs(num);
// console.log(num);
// console.log(ssd);



// *************

// const personOne = {
//     name: 'Bob',
//     age: 21
// }

// function insIns(elem) {
//     elem.age += 1
//     return elem
// }

// insIns(personOne);
// console.log(personOne);

// **********************
// const nameUser = 'Olesya';
// const user = {
//     lastName: 'Albert',
//     firstName: 'Shcherbina',
//     nameUser,
//     tertTert() {
//         console.log(12);
//     },
//     info: {
//         email: 'asdasd',
//         date: {
//             mounth: 'september'
//         }
//     }
// }

// const person = Object.assign({}, user)
// person.lastName = 12;

// console.log(person)

// const person2 = { ...user }
// person2.lastName = 222
// console.log(person2);

// const person3 = JSON.parse(JSON.stringify(user))
// person3.lastName = 777;
// console.log(person3);

// user.tertTert()

// JSON.stringify(user);

// user.isAdault = true;


// delete user.info['email']
// const userA = user;

// userA.age = '25';
// user.age = '15';
// user.age = 'Age';

// delete userA.age

// console.log(user);
// console.log(user.lastName);
// console.log(user.firstName);
// console.log(userA);




// let a = 5;
// let b = 3;

// function sum(a, b) {
//     const c = a + b;
//     console.log(c);
// }
// sum(a, b)
// a = 15
// b = 22
// sum(a, b)












// ****************
// Превая заглавная
// ****************


// let str = "hEllo woRld";

// function newtest(str){
//    return str[0].toUpperCase() + str.slice(1).toLowerCase();
// };

// console.log(newtest(str));


// let str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";  
// let arr = "";

// function change_register(str) {
//   for (i=0; i<str.length; i++){
//     if (str[i] === str[i].toLowerCase()) {
//       arr += str[i].toUpperCase();
//     }else{
//       arr += str[i].toLowerCase()
//     }
//   }return arr
// }
// console.log(change_register(str))

// *****************************
// ЗАГЛАВНЫЕ СТРОЧНЫЕ И НАОБОРОТ 
// *****************************

// let str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";  

// function remove_char(str) {
//     var res = "";
//     res = str.replace(/[^\w\s]|_/g, "")
//         //    .replace(/\s+/g, " ");
//     return res;      
//  }
//  console.log(remove_char(str));

// ***************************
// УБРАТЬ ВСЕ НЕНУЖНЫЕ СИМВОЛЫ
// ***************************


