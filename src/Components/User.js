import { useState } from "react";

const User = (props) => {
    const [count,setcount] = useState(0)
    const{age} = props;
    return(
        <div className="text-xl border-2 border-black m-4 p-4">
            <h1> This is User Component</h1>
                <h2>Name : {props.name}</h2>
                <h2>age : {age}</h2>
                <button className="border-2 px-3 border-black" onClick={()=>{setcount(count+1)}}>Inc count</button>
                <h2>count: {count} </h2>
                
        </div>
    )
};

export default User;