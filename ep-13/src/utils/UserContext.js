import { createContext } from "react";

const UserContext =  createContext({
    LoggedInUser : "Default User",
    setusername: () => {}
}
);

export default UserContext;
