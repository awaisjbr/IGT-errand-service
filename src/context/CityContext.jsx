import { createContext, useState } from "react";

export const CityContext = createContext(null);

export const ContextProvider = ({children}) => {
    const [selectedCity, setSelectedCity] = useState(sessionStorage.getItem("city"));

    const contextValues = {selectedCity, setSelectedCity}

    return(
        <CityContext.Provider value={contextValues}>
            {children}
        </CityContext.Provider>
    )
}