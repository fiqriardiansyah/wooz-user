import React from "react";
import { PHONE_NUMBER } from "../components/phone-number";
import { VOUCHER_SUCCESS } from "../components/voucher-success";

export const GlobalContext = React.createContext();

export default function GlobalProvider({ children }) {
    
    const [state, setState] = React.useState({
        state: PHONE_NUMBER,
        phoneNumber: '',
        result: VOUCHER_SUCCESS,
    });

    return (
        <GlobalContext.Provider value={{ state, setState }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => React.useContext(GlobalContext);