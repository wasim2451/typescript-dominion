"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
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
function add(a, b) {
    return a + b;
}
console.log('Basic Functions : ', add(5, 3));
// Arrow functions
const add2 = (a, b) => {
    return a + b;
};
console.log('Arrow functions :', add2(10, 20));
//Optional Parameters
function displayName(name, greet) {
    console.log(name);
    if (greet) {
        console.log(greet);
    }
}
displayName("Saru");
displayName("Rifa", "hello");
//Default Parameters
function sayName(name2, name = "Rifa") {
    console.log(`Parameter name ${name2} and Default Name is ${name}`);
}
;
sayName("Sritama");
//Return type
function noreturn() {
    console.log('Void function running !');
}
noreturn();
//Never return 
// Function that return nevers always used for throwing an error
// function neverReturn():never{
//     throw new Error("I love Her !");
// }
// neverReturn();
//Async function
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield axios_1.default.get("https://jsonplaceholder.typicode.com/posts");
        console.log(res.data);
    });
}
fetchData();
