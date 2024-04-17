import React from "react";
import style from "./alert.module.css";

const AlertComponent = ({ text }: any) => {
  return <div className={style.alert}>{text}</div>;
};

export default AlertComponent;
