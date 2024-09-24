import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [accountData, setAccountData] = useState(() => {
        const savedAccount = sessionStorage.getItem("accountData");
        return savedAccount ? savedAccount : ""
    });

    // const [contractData, setContractData] = useState(() => {
    //     const savedContract = sessionStorage.getItem("contractData");
    //     return savedContract ? savedContract : null
    // });
    const [contractData, setContractData] = useState(null);

    useEffect(() => {
        sessionStorage.setItem("accountData", accountData);
        // sessionStorage.setItem("contractData", contractData);
    })


    return (
        <AppContext.Provider value={{ accountData, setAccountData, contractData, setContractData }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };