import { useEffect, useState } from "react"

const useStatusCheck = () => {
    const[internetstatus,setinternetstatus] = useState(true);
    
    useEffect(()=>{
        window.addEventListener("online", () => {
            setinternetstatus(true);
        });
        window.addEventListener("offline", () => {
            setinternetstatus(false);
        });
    },[]);

    return internetstatus;
};

export default useStatusCheck;