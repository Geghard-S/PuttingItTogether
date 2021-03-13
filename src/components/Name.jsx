import React, {Component} from "react";


class Name extends Component {
    constructor(props){
        super(props);
    }


    render(){
        return(
            <>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <h3>Age: {this.props.age}</h3>
                <h3>Hair Color: {this.props.hairColor}</h3>
                <br/>
            </>
        )
    }
}

export default Name;