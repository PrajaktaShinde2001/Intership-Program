import React,{Component} from 'react';
import Child from './Child'

class Parent extends Component{
    name="Welcome to edureka";
    render(){
        return(
            <div>{<Child nameFromParent={this.name}/>}</div>
        );
    }
}
export default Parent;