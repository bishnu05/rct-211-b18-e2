//Write the ActionCreator functions here
import * as types from "./actionType";
import axios from "axios";

const getWatchsData=(params)=>(dispatch)=>{
    dispatch({type:types.GET_WATCHES_DATA_REQUEST})
    return axios.get("http://localhost:8080/watches",params)
      .then(r=>{
        return dispatch({type:types.GET_WATCHES_DATA_SUCCESS,payload:r.data})
      }).catch(e=>{
        return dispatch({type:types.GET_WATCHES_DATA_FAILURE,payload:e})
      })
}

export {getWatchsData};