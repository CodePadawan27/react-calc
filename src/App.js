import React from "react";
import "./styles/styles.css";
import Calculator from "./layout/Calculator/Calculator";
import DescText from "./components/DescText";

const app = () => (
  <div className="app">
    <DescText />
    <Calculator />
  </div>
);
export default app;
