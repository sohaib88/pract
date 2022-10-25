// import {useRef, useState, useEffect} from 'react'
// function Counter(){
//     const obj = useRef({name:'KD'})
//     const inputElmRef = useRef()
//     const [count,setCount] = useState(0)

//     const intervalRef = useRef()
   
   

//     function reset(){
//         console.log('ID=>', intervalRef.current)
//         setCount(0)
//         clearInterval( intervalRef.current)
//     }
   
//      useEffect( function(){
//         console.log('ddd')
//         intervalRef.current = setInterval(function(){
//            setCount(count=> {console.log(count);return count+1})
           
//         }, 1000)

       
//     },[])
//     return (<>
//         {/* <input ref={inputElmRef} type="text" name="firstName" /> */}
//         <h1>I am Counter! {obj.current.name}</h1>
//         {/* <h3>Count: {obj.current}</h3>
//         <button onClick={()=> {obj.current = obj.current+1; console.log(obj.current) }}>Increment</button> */}
//         <h3>Count 2: {count}</h3>
//         <button onClick={reset}>Reset Count</button>
//         <br/>
//         {/* <button onClick={()=> {inputElmRef.current.focus(); }}>Focus In</button>
//         <br/>
//         <button onClick={()=> {inputElmRef.current.blur()}}>Focus Out</button> */}

//     </>)
// }

// export default Counter;
import React from "react";
const isObject = obj => {
    return typeof obj === "object";
  };
  
  const areAnyTrue = obj => {
    let flag = false;
  
    Object.values(obj).map(value => {
      if (isObject(value)) {
        flag = areAnyTrue(value);
      } else {
        if (value) {
          flag = true;
        }
      }
    });
  
    return flag;
  };
  
  const setAllBool = (obj, bool) => {
    let newObj = obj;
  
    Object.entries(obj).map(([key, value]) => {
      newObj[key] = isObject(value) ? setAllBool(value, bool) : bool;
    });
  
    return newObj;
  };
  
  class CheckB extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        itemList: {
            A: true,
          B: {
            X: {
              Y: false,
              N: false,
              O: false
            },
            T: false,
            R: true
          },
          C: true,
          D:{
            Z: {
              K: false,
              L: false,
              M: false
            }
        }
      }
    };
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick = (value, items) => {
      this.setState({ itemList: items });
    };
  
    render() {
      return (
        <NestedCheckbox
          checked={true}
          items={this.state.itemList}
          handleClick={this.handleClick}
        />
      );
    }
  }
  
  class NestedCheckbox extends React.Component {
    click = (key, value, isGroup) => {
      const { items, handleClick } = this.props;
      const newValue = isObject(value)
        ? isGroup ? setAllBool(value, !areAnyTrue(value)) : value
        : !value;
  
      const newObj = {
        ...items,
        [key]: newValue
      };
  
      return handleClick(key, newObj, false);
    };
  
    render() {
      const { items } = this.props;
  
      return Object.entries(items).map(([key, value]) => {
        const checked = isObject(value) ? areAnyTrue(value) : value;
  
        return (
          <div style={{ border: "1px solid gray", padding: "8px 12px" }}>
            <input
              type="checkbox"
              checked={checked}
              onClick={() => this.click(key, value, isObject(value))}
            />
  
            {key}
  
            {checked && (
              <NestedCheckbox
                items={value}
                handleClick={(x, value) => this.click(key, value, false)}
              />
            )}
          </div>
        );
      });
    }
  }
export default CheckB;
//   ReactDOM.render(<App />, document.getElementById("App"));