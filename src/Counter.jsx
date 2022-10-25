import React from "react";
import { useState } from "react";

function UpdatedCounter(OrgCounter){
    function NewCounter(){
        const style = {
            textAlign:"center"
        }
        // const [count,setCount] = useState(0)
        // function handleC(){
        //     setCount(count+1)
        // }
        return <OrgCounter style={style}/>;
    }
   
    return NewCounter;
}

export default UpdatedCounter;


