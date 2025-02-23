import { useContext, createContext, provider, useState } from "react";
import {data} from "../data/data"

const AppContext = createContext();

export const  useAppContext = ()=> useContext(AppContext);

export const AppContextProvider = ({children}) =>{
    const [dbData,setDbData] = useState(data); 

    const values = {
        dbData,
        setDbData
    }

    return <AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>
}