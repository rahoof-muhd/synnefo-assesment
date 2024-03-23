import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Login(){
    document.body.style.backgroundColor="mediumslateblue"

    const [Data, setData] = useState({
        uname: "",
        pass: ""
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...Data, [name]: value });
    };

    const handlesubmit = async (e) => {
        e.preventDefault();


        try {
            const response = await axios.post('http://localhost:3000/api/login', Data);
            console.log(response.data);
            alert(response.data.msg)
            localStorage.setItem("token", response.data.token);
            navigate("/user")
        }
        catch (error) {
            alert('login failed' + error.response.data.msg)
        }
    }


    return(
        <>
        <div className=" w-max h-max border-1 border-black grid place-content-center m-auto mt-40 bg-white p-10 rounded-md  ">
                <h1 className=" text-center font-bold text-3xl">Welcome back!</h1>
                <h2 className=" text-center text-slate-400">Log in to access your account.</h2>
            <form action="" onSubmit={handlesubmit} className=" grid gap-5 mt-5 ">
                <input type="text" name="uname"  onChange={handleChange} placeholder="Enter Name" className=" border rounded-sm pl-2 pt-1 pb-1"/>
                <input type="password" name="pass"  onChange={handleChange} placeholder="Choose a Password" className=" border rounded-sm pl-2 pt-1 pb-1"/>
                <input type="submit" value={"Login"} className=" bg-violet-500 text-white pt-1 pb-1 rounded-sm" />
            </form>
                <h3 className=" mt-5">Not a member?<Link to="/" className=" text-sky-500"> Signup Here</Link></h3>
        </div>
        </>
    )
}
export default Login;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// import { useNavigate } from 'react-router-dom';

// function Login() {
//     const [Data, setData] = useState({
//         email: "",
//         password: ""
//     })
//     // const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setData({ ...Data, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();


//         try {
//             const response = await axios.post('http://localhost:3000/api/login', Data);
//             console.log(response.data);
//             alert(response.data.msg)
//             localStorage.setItem("token", response.data.token);
//             // navigate("/homenew")
//         }
//         catch (error) {
//             alert('login failed' + error.response.data.msg)
//             //   console.error('login failed:', error.response.data.msg);
//         }
//     }

//     return (
//         <>
            
//             <div className="container flex justify-center bg-gradient-to-b from-zinc-900 to-black h-max w-full">
//                 <div className="p-5 bg-black rounded-lg px-32">
                    
//                     <form onSubmit={handleSubmit}>
//                         <div className=" form1 p-5 flex flex-col justify-center text-justify gap-3 text-white">
//                             <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
//                                 Email or Username
//                             </label>
//                             <input
//                                 type="text"
//                                 name="email"
//                                 className="block flex-1 rounded-md border border-stone-500 bg-stone-900 py-2 pl-2 text-white placeholder:text-gray-400 hover:border-2 hover:border-white"
//                                 placeholder="Email or Username"
//                                 onChange={handleChange}
//                             />

//                             <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
//                                 Password
//                             </label>
//                             <input
//                                 type="text"
//                                 name="password"
//                                 className="block flex-1 rounded-md border border-stone-500 bg-stone-900 py-2 pl-2 text-white placeholder:text-gray-400  hover:border-2 hover:border-white"
//                                 placeholder="Password"
//                                 onChange={handleChange}
//                             />
//                             <br></br>
//                             <input type="submit" value={"Log In"} className=" text-black bg-green-500 h-11 w-96 rounded-full font-bold hover:bg-green-400 border-none  text-center" />
//                             <br></br>
//                             <a className="underline underline-offset-1 text-center hover:text-green-500 text-white font-bold text-sm" href=''>Forgot your password? </a>
                           
//                         </div>
//                     </form>
//                 </div>

//             </div>


//         </>
//     )
// }
// export default Login
