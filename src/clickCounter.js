import React, { useState } from 'react'
import getCounterHOC from './CounterHOC'

function clickCounter(props) {
    
  return (
    
    <div style={{backgroundColor: props.color}}>
    <h1>Hello {props.name}</h1>
    <h3 onClick={props.increment} >click me</h3>
    <span>You have clicked me {props.count} times!</span> 
    <button onClick={props.setcolor}>Click me to change color</button>
    </div>
  )
}
export default getCounterHOC(clickCounter)