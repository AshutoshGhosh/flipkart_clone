import { createContext, useState } from "react";

export const LoginContext = createContext(null);

const DataProvider = ({ children }) => {
  const [accountDetails, setAccountDetails] = useState("");
  return (
    <LoginContext.Provider value={[ accountDetails, setAccountDetails ]}>
      {children}
    </LoginContext.Provider>
  );
};

export default DataProvider;
