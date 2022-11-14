import { createContext, useState } from "react";
export const ActiveContext = createContext({
    activePage : null,
    setActivePage : () => null,
});
export const ActiveProvider = ({children}) =>{
    const [activePage, setActivePage] = useState(null);
    const value = {activePage,setActivePage};
    return <ActiveContext.Provider value={value}>{children}</ActiveContext.Provider>
}