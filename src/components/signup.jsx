import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Signup(){
    document.body.style.backgroundColor="mediumslateblue"

        const [formData, setFormData] = useState({
          uname: '',
          email: '',
          pass: '',
          cpass: ''
        });
     
      
        const navigate = useNavigate();
      
    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          console.log(formData);
          const response = await axios.post('http://localhost:3000/api/signup', formData);
          console.log(response.data);
          alert(response.data.msg)
          navigate("/login")
        } catch (error) {
          alert('failed:' + error.response.data.msg)
          console.error('failed:', error.response.data.msg);
        }
      };
    
    return(
        <>
        <div className=" w-max h-max border-1 border-black grid place-content-center m-auto mt-36 bg-white p-10 rounded-md  ">
                <h1 className=" text-center font-bold text-3xl">Join us today!</h1>
                <h2 className=" text-center text-slate-400">Sign up now to become a member.</h2>
            <form action="" className=" grid gap-5 mt-5 " onSubmit={handleSubmit}>
                <input type="text" name="uname" placeholder="Enter Name" className=" border rounded-sm pl-2 pt-1 pb-1" onChange={handlechange}/>
                <input type="email" name="email" placeholder="Enter Email" className=" border rounded-sm pl-2 pt-1 pb-1" onChange={handlechange}/>
                <input type="password" name="pass" placeholder="Choose a Password" className=" border rounded-sm pl-2 pt-1 pb-1" onChange={handlechange}/>
                <input type="password" name="cpass" placeholder="Re-Enter Password" className=" border rounded-sm pl-2 pt-1 pb-1" onChange={handlechange}/>
                <input type="submit" value={"Signup"} className=" bg-violet-500 text-white pt-1 pb-1 rounded-sm" />
            </form>
                <h3 className=" mt-5">Already a member?<Link to="login" className=" text-sky-500"> Login Here</Link></h3>
        </div>
        </>
    )
}
export default Signup;