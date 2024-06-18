import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

/* const About = () => {
    return (
        <div>
            <h1>This is About Page...</h1>
            <h2>We are learning React</h2>
            < UserClass name= { "Nisarg"} age={22}/>
            <User name= { "Nisarg"} age={22}/>
        </div>
    )
};
*/
class About extends Component {
    
    constructor(){
        super()
        //console.log("Parent const")
        this.state = {
            name : "Dummy name ",
            username : "Dummy username",
            email : "Dummy email"
        };
    }

    async componentDidMount(){
        //console.log("Parent mount")
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
        const json = await data.json();
        this.setState ({
            name:json[0].name,
            username:json[0].username,
            email:json[0].email,

        })
    }

    render(){
        //console.log("Parent render")

    return (
        <div className=" m-4 p-4 text-center"> 
            <h1 className="font-bold text-6xl">This is About Page...</h1>
            <h2 className="font-bold text-6xl">We are learning React</h2>
            
            <UserContext.Consumer>  
                {(data) => <h1 className="p-3 font-bold text-2xl">{data.LoggedInUser}</h1>}
            </UserContext.Consumer>

            < UserClass name= { this.state.name} Username = { this.state.username} Email= { this.state.email} />
            <User name= { "User Child "} age={22}/>

        </div>
    )
}};

export default About;