import React  from "react";
import axios from "axios";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Signup from "./components/signup";
import Login from "./components/login";
import User from "./components/username";

function App() {

  console.log(import.meta.env);
  axios.defaults.baseURL = location.origin;
  if(import.meta.env.MODE == "development") {
    axios.defaults.baseURL = "http://localhost:3000"
  }

return(
  <>
  <BrowserRouter>
  <Routes>
   <Route path="/" index element={<Signup/>}/> 
   <Route path="/login" element={<Login/>}/> 
   <Route path="/user" element={<User/>}/> 
  </Routes>
  </BrowserRouter>
  </>
)

}
export default App;