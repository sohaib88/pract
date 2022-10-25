import { useState } from "react";

function Click(){
    const [count,setCount] = useState(0);
    function handleC(){
        setCount(count+1);
    }
    return(
        <>
            <h1 onClick={handleC}>Click Me</h1>
            <span>{count}</span>
        </>
    )
}
 export default Click;