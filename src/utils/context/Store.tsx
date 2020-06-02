import React, { useState, ReactNode } from "react";

type StoreProps = {
  children: ReactNode;
};

type SetValue = (value: any) => void;

type StoreContextType = {
  hexValue?: Object;
  setHexValue?: SetValue;
};

export const StoreContext = React.createContext<StoreContextType>({});

const Store = ({ children }: StoreProps) => {
  const [hexValue, setHexValue] = useState([[214,78,69],[247,242,163],[201,216,147],[57,141,112],[62,80,64]]);
  return (
    <StoreContext.Provider
      value={{
        hexValue,
        setHexValue,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default Store;
