import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    
    {console.log(err)}
    return (
        <div>
            <h1>Ooppes!! Error Found...</h1>
            <h2>Resolve the Error : </h2>
            <h3>{err.status} : {err.statusText}</h3>
            <h3>{err.data}</h3>
        </div>
    )
};

export default Error;