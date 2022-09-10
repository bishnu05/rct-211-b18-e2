//Create the HOC for protected Routes
import React from "react";
import { useSelector } from "react-redux";
import {Navigate,useLocation} from "react-router-dom";

const ReqAuth = ({children}) => {
    const location = useLocation()
    const auth= useSelector((store)=>store.AuthReducer.isAuth);

    if(!auth){
        return <Navigate to ="/login" state={{from:location}} replace/>
    }
    return children;
};

export default ReqAuth;
