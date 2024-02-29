import React, { createContext, useEffect, useState } from "react";

const LocalStorageContext = createContext()

const LocalStorageProvider = ( {children} ) => {
    const [email, setEmail] = useState("");

    useEffect(() => {
        localStorage.setItem('emailLocalStorage', JSON.stringify(email));
        setEmail(email);
    }, [email]);

    return (
        <LocalStorageContext.Provider value={{email, setEmail}}>
            {children}
        </LocalStorageContext.Provider>
    );
}

export {LocalStorageProvider, LocalStorageContext}