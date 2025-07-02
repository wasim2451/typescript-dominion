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
function add(a :number,b:number):number{
     return a+b;
}
console.log('Basic Functions : ',add(5,3));

// Arrow functions
const add2=(a :number,b:number):number=>{
    return a+b;
}
console.log('Arrow functions :',add2(10,20));

//Optional Parameters
function displayName(name:string,greet?:string){
    console.log(name);
    if(greet){
        console.log(greet);
    }
}
displayName("Saru");
displayName("Rifa","hello");
