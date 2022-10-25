import { Component } from "react";
function getCounterHOC(WrapperComponent){
    class newComponent extends Component{
        constructor(props)
        {
            super(props)

            this.state = {count:0,color:'blue'}
            this.increment = this.increment.bind(this)
            this.setcolor = this.setcolor.bind(this)
        }
        increment(){
            this.setState(state=>({count:state.count+1}))
        }
        setcolor(){
            this.setState(state=>({color:state.color = 'green'}))
        }
        render(){
            return(<>
            <WrapperComponent color={this.state.color} setcolor={this.setcolor} increment={this.increment} count={this.state.count} {...this.props}/>
            </>)
        }
    }
    return newComponent

}
export default getCounterHOC