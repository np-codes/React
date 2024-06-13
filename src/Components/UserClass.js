import React from "react";

class UserClass extends React.Component {
    componentDidMount(){
       // console.log(this.props.name +" mount")
    }
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
       // console.log(this.props.name + " const")
    }
    render(){   
       // console.log(this.props.name +" render")
        const {Username,Email} = this.props; 
        return (
            <div className="text-xl border-2 border-black m-4 p-4 ">
                <h1 className="font-semibold"> This is User Class Component</h1>
                <h2>Name : {this.props.name}</h2>
                <h2>Username : {Username}</h2>
                <h2>Email : {Email}</h2>
            </div>   
        )
    }
};

export default UserClass;