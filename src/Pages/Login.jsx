import React from "react";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation,useNavigate} from "react-router-dom";
import {login} from "../Redux/AuthReducer/action";
import { LOGIN_SUCCESS } from "../Redux/AuthReducer/actionTypes";
const Login = () => {
const isLoading=useSelector((state)=>state.AuthReducer.isLoading)
  const navigate=useNavigate()
  const [email,setEmail] =useState("eve.holt@reqres.in");
  const [password,setPassword] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const loginFrom=location.state?.from?.pathname||"/"

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(email && password){
      dispatch(login({email,password})).then((r)=>{
        if(r.type===LOGIN_SUCCESS){
          navigate(loginFrom,{replace:true})
        }
      });
    }
 };
  return (
    <div>
      <h2 style={{textAlign:"center"}}>LOGIN</h2>
      <form onSubmit={handleSubmit} style={{textAlign:"center",fontSize:"24px"}}>
        <div>
          <label>User Email</label>
          <br />
          <input data-testid="login-email" placeholder="email" style={{fontSize:"20px"}} type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div style={{marginTop:"1rem"}}>
          <label>User Password</label>
          <br />
          <input data-testid="login-password" type="password" placeholder="password" style={{fontSize:"20px"}} value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button style={{textAlign:"center",backgroundColor:"black",color:"white",border:"none",outline:"none",padding:"8px 8px",marginTop:"1rem",width:"220px",borderRadius:"4px",cursor:"pointer",fontSize:"20px"}} type="submit" data-testid="login-submit">
          {isLoading? "Loading":"LOGIN"}
        </button>
      </form>
    </div>
  );
};

export default Login;
