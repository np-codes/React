import { useState } from "react";

const User = (props) => {
    const [count,setcount] = useState(0)
    const{age} = props;
    return(
        <div className="UserClass">
            <h1> This is User Component</h1>
                <h2>Name : {props.name}</h2>
                <h2>age : {age}</h2>
                <button onClick={()=>{setcount(count+1)}}>Inc count</button>
                <h2>count: {count} </h2>
                
        </div>
    )
};

export default User;