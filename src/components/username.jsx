import axios from "axios";
import { useState,useEffect, React } from "react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";



function User(){
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token")
        navigate("/")
    }
    const [data, setData] = useState();
    useEffect(() => {
        axios.get("http://localhost:3000/api/getusername", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`

            }
        })
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
    }, []);
    return(
        <>
    
        <div className=" text-center font-bold mt-32 text-4xl">

        {data?.map((item, index) => (
            <div key={index}>
                            <h1 >hello:{(item.uname)}</h1>
                            </div>
                        ))}
                        </div>
                        <div className=" grid m-auto place-content-center bg-white w-max p-2 rounded">

                        <button onClick={logout} >logout</button>
                        </div>
        </>
    )
}
export default User;