import React,{Component} from 'react'

class Child extends Component{
    name="Welcome to Edureka";
    render(){
        return(
            <div>
                <h2>{this.props.nameFromParent}</h2>
            </div>
        );
    }
}
export default Child;