import React, {Component} from "react";


class New extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: this.props.age
        }
    }

    counterHandler = () => {
        this.setState({
            counter: this.state.counter +1
        })
    }

    render(){
        return(
            <>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <h3>Age: {this.state.counter}</h3>
                <h3>Hair Color: {this.props.hairColor}</h3>
                <button onClick={ this.counterHandler }>Increase age by 1</button>
                <br/>
            </>
        )
    }
}

export default New;