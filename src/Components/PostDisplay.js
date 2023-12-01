import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
// import { postRequestStart,postFailureData,postSuccessData } from "../redux/actions/postActions";
import {postRequest} from "../redux/actions/postActions";

import axios from "axios";

const PostDisplay = () => {
     
    const {loading, data, error} = useSelector(state => state);

    console.log({loading, data, error})

    const dispatch = useDispatch();


    useEffect(()=>{

        // dispatch(postRequest())
        
        // dispatch(postRequestStart());
        // axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
        // .then(response =>  dispatch(postSuccessData(response.data)))
        // .catch(err=> dispatch(postFailureData(err.message)))

        dispatch(postRequest())

    },[])

    return(
        <div>
            <h1>Post Display</h1>
            {
                data.length>0 && data.map((item,index)=>(
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default PostDisplay;