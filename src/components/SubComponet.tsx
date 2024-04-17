import React, { useContext } from "react";
import { AlertContext } from "../App";

const SubComponet = () => {
  const clicked = useContext(AlertContext);
  return (
    <div>
      <button onClick={clicked}>Nhấn vào đây</button>
    </div>
  );
};

export default SubComponet;
