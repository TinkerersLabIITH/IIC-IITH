import { useState } from "react";
import "./App.css";
import AnnualReport from "./Components/AnnualReport";
import Mom from "./Components/Mom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import IIC_Council from "./Components/IIC_Council";
import Major_Functions from "./Components/Major_Functions";
import IandE from "./Components/IandE";

function App() {
  return (
    <>
      <Header />
      <Major_Functions />
      <IandE />
      <IIC_Council />
      <Mom />
      <AnnualReport />
      <Footer />
    </>
  );
}

export default App;
