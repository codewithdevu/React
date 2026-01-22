import React from "react";
import Usercontext from "./Usercontext";
import { useState } from "react";

const Usercontextprovider = ({Children}) => {
    const [user , setuser] = useState(null)

    return(
        <Usercontext.Provider value={{user , setuser}}>
        [Children]
        </Usercontext.Provider>
    )
}

export default Usercontextprovider;