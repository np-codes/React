import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    
    {console.log(err)}
    return (
        <div className="m-5 p-5 text-center">
            <h1 className="py-3 font-bold text-5xl">Ooppes!! Error Found...</h1>
            <h2 className="py-3 font-semibold text-2xl">Resolve the Error : </h2>
            <h3 className="py-3 font-medium text-xl">{err.status} : {err.statusText}</h3>
            <h3 className="py-3 font-medium text-xl">{err.data}</h3>
            <h1 className="py-3 font-bold text-5xl">😥😨🤯😵</h1>

        </div>
    )
};

export default Error;