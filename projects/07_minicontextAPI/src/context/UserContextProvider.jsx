import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{
    const [user, setUser] = React.useState(null);
    const fetchData = async ()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        const names = data.map(user => user.name); // Extract only names
        return names; // Log names only
    }
    return(
        <UserContext.Provider value={{user, setUser, fetchData}}> 
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;