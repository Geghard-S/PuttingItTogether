import React, {Component} from "react";
// import Name from "./Name"
import Name from "./New"

class List extends Component {
    constructor(props){
        super(props)
    }


    render() {
        return (
            <>
                <Name firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"} />
                <Name firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"} />
                <Name firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"} />
                <Name firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Brown"} />
            </>
        )
    }
}


export default List;