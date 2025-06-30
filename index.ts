import axios from "axios";

 async function fetchUsers(){
    const res=await axios.get('https://jsonplaceholder.typicode.com/users');
    // console.log(res.data);
    const data=res.data;
    for(let i=0;i<3;i++){
        console.log(data[i].name);
    }
 }
 fetchUsers();