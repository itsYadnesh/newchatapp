// import React, { useEffect, useState } from "react";
// import Sidebar from "./Component/Sidebar";
// import axios from "axios"
// import { Login } from "./Login";
// const App = () => {
//   const [user, setUsers] = useState([]);
  
//   const getUserlist = async () => {
//    const token = {
//     headers: JSON.stringify({ Authorization: `Bearer ${Login()}` })
//    }  
//     await axios("https://api-im.chatdaddy.tech/contacts", {
//      token,
//     })
//       .then((res) => res.json())
//       .then((data) => setUsers(data.json));
//   };

//   useEffect(() => {
//     getUserlist();
//   }, [user]);

//   console.log(user);
//   return (
//     <>
//       <Sidebar user={user}></Sidebar>
//     </>
//   );
// };
// export default App;


import React, { useEffect, useState } from "react";
import Sidebar from "./Component/Sidebar";
import Login from "./Login"

const App = () => {
  const[userList, setUserList]=useState([]);

  const getUserlist = async () => {
    const token =await Login();

    if(token !== undefined){
        const userData=await fetch("https://api-im.chatdaddy.tech/contacts", {
            headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            },
         }).then((res) => res.json())
         setUserList(userData.contacts)
    }else{
        console.log("invalid token")
    }
  };
  useEffect(() => {
    getUserlist();
  }, []);
  return (
    <>
        <Sidebar user={userList} />
        { console.log(userList)}
    </>
  );
};
export default App