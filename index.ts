import axios from "axios";
type Users={
    id:number,
    name:string,
    email :string,
    saru?:string // Optional type
}

 async function fetchUsers():Promise<void>{
    const res=await axios.get<Users[]>('https://jsonplaceholder.typicode.com/users');
    // console.log(res.data);
    const data=res.data;
    data.slice(0,3).forEach((i)=>{
        console.log(i.name);
    });
 }
 fetchUsers();