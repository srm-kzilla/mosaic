import React, { useState, useEffect, ReactNode } from "react";

import { DEFAULT_PALETTE } from "../constants";

type StoreProps = {
  children: ReactNode;
};

type StoreContextType = {
  hexValue: string[];
  setHexValue: (values: string[]) => void;
};

export const StoreContext = React.createContext<StoreContextType>({
  hexValue: [],
  setHexValue: () => {
    throw new Error("Used StoreContext outside of provider");
  },
});

const Store = ({ children }: StoreProps) => {
  let [hexValue, setHexValue] = useState(DEFAULT_PALETTE);

  useEffect(() => {
    let storedPalette = window.localStorage.getItem("defaultPalette");
    if (storedPalette !== null) {
      setHexValue(JSON.parse(storedPalette));
    }
  }, []);

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
