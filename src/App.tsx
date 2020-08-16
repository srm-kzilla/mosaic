import React, { useState, useEffect, useContext } from "react";

import GeneratePalette from "./components/GeneratePalette";
import TrendingPalette from "./components/TrendingPalette";
import MyPalettes from "./components/MyPalettes";
import { StoreContext } from "./utils/context/Store";
import "./App.css";

const App = () => {
  let { hexValue, setHexValue } = useContext(StoreContext);
  const [savePalette, setPaletteSaved] = useState(false);
  const [myPalette, setMyPalette] = useState([] as any);

  useEffect(() => {
    let a: any = window.localStorage.getItem("hex");
    let r: any = JSON.parse(a);
    setMyPalette(r);
  }, []);

  const handleSave = (value: boolean) => {
    let savedPalette: string = window.localStorage.getItem("hex")!;
    let myPalettes: any = [];

    if (savedPalette === null) {
      myPalettes.push([...hexValue]);
    } else {
      myPalettes.push(...JSON.parse(savedPalette), hexValue);
    }
    window.localStorage.setItem("hex", JSON.stringify(myPalettes));
    savedPalette = window.localStorage.getItem("hex")!;
    setMyPalette(JSON.parse(savedPalette));
    setTimeout(() => {
      setPaletteSaved(!value);
    }, 500);
  };

  const handleDelete = (index: number) => {
    myPalette.splice(index, 1);
    window.localStorage.setItem("hex", JSON.stringify(myPalette));
    let savedPalette: string = window.localStorage.getItem("hex")!;
    setMyPalette(JSON.parse(savedPalette));
  };

  const handleHexChange = (colors: string[]) => {
    console.log(colors);
    setHexValue(colors);
  };

  return (
    <div className="App">
      <GeneratePalette savePalette={handleSave} hexValue={hexValue} />
      <MyPalettes
        myPalette={myPalette}
        hexValue={hexValue}
        handleHexChange={handleHexChange}
        onDelete={handleDelete}
      />
      <TrendingPalette />
    </div>
  );
};

export default App;
