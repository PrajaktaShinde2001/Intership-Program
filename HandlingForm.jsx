import React, {Component} from 'react';
class From extends Component{
    Constructor() {
        super();
        this.state = {Participate: ''};
    }
    ChangeHandler = (event) => {
        this.setState({Participate: event.target.value});
    }
    render(){
        return(
            <form>
                <h1>Welcome {this.state.Participate}</h1>
                <p>Register your name:</p>
                <input type="text" onChange={this.ChangeHandler} />
            </form>
        );
    }
}
export default Form;