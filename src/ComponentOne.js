import React from "react";
import UpdatedCounter from "./Counter";

function ComponentOne(props){
    return (<div style={props.style}>
        <h2>count</h2>
        <button>Button</button>
        <br/>
        <img src="data:image/jpeg;base64,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"></img>
    </div>)
}

export default UpdatedCounter(ComponentOne);