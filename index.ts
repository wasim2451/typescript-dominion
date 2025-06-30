import axios from "axios";

 async function fetchUsers(){
    const res=await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(res.data);
 }
 fetchUsers();