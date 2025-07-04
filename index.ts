import axios from "axios";
// type Users={
//     id:number,
//     name:string,
//     email :string,
//     saru?:string // Optional type
// }

//  async function fetchUsers():Promise<void>{
//     const res=await axios.get<Users[]>('https://jsonplaceholder.typicode.com/users');
//     // console.log(res.data);
//     const data=res.data;
//     data.slice(0,3).forEach((i)=>{
//         console.log(i.name);
//     });
//  }
//  fetchUsers();

// type Post={
//     id:number,
//     title:string,
//     body:string
// }

// const fetchPosts=async():Promise<void>=>{
//     const res=await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
//     const posts=res.data;
//     posts.slice(0,3).forEach(({id,title})=>{
//         console.log(`${id}| ${title}`);
//     })
// }
// fetchPosts();


//Module 3 -> Functions in Typescript
//Basic Function
// function add(a :number,b:number):number{
//      return a+b;
// }
// console.log('Basic Functions : ',add(5,3));

// // Arrow functions
// const add2=(a :number,b:number):number=>{
//     return a+b;
// }
// console.log('Arrow functions :',add2(10,20));

// //Optional Parameters
// function displayName(name:string,greet?:string){
//     console.log(name);
//     if(greet){
//         console.log(greet);
//     }
// }
// displayName("Saru");
// displayName("Rifa","hello");
 
// //Default Parameters
// function sayName(name2:string,name:string="Rifa"){
//     console.log(`Parameter name ${name2} and Default Name is ${name}`);
// };
// sayName("Sritama");

// //Return type

// function noreturn():void{
//     console.log('Void function running !');
// }
// noreturn();

// //Never return 
// // Function that return nevers always used for throwing an error

// function neverReturn():never{
//     throw new Error("I love Her !");
// }
// neverReturn();

// //Async function
// async function fetchData():Promise<void>{
//     const res=await axios.get("https://jsonplaceholder.typicode.com/posts");
//     console.log(res.data);
// }
// fetchData();

//Module ->4

//Object Types using type
type User={
    id:number,
    name:string,
    email:string
}
type userName=User &{
    age:number
}
const obj1:userName={
    id:1,
    name:"Wasim",
    email:"abc@example.com",
    age:55
}

//Typescript check every field with User Type . 
console.log(obj1);

//Object types using Interface

interface User2 {
    id:number,
    name:string,
    email:string
}

interface user22 extends User2{
    attack : number 
}
const obj2:user22={
    id:24,
    name:"Sritama",
    email:"abc@gmail.com",
    attack :100
}
console.log(obj2);

//interface of same names can be merged !
interface obj11{
    name:string,
    class:number
}
interface obj11{
    rollno :number
}

const obj :obj11={
    name:"Sritama",
    class:10,
    rollno:10
}
console.log(obj);
//Optional Properties
// interface Post {
//   id: number;
//   title: string;
//   body?: string; // may or may not exist
// }

//Readonly Properties

// interface Post {
//   readonly id: number;
//   title: string;
// }
// const x:Post={
//     id:2,
//     title:"Hello"
// }
// x.id=3; // Error

//Nested Object types

interface author{
    name:string,
    title:string
}
interface book{
    name:string,
    pub_year:number,
    author:author
}

const newBook:book={
    name:"ABC",
    pub_year:2016,
    author:{
        name:"Adolf Hitler",
        title:"ABC"
    }
}

console.log(newBook);
//Array of Custom Objects !

interface Users{
    name:string,
    title:string
}
const set:Users[]=[
    {name:"Wasim",title:"Khan"},
    {name:"Sritama","title":"Kumar"}
]
console.log(set);
