import React from "react";
import style from "./footer.module.css";
import { IoCalendarClear } from "react-icons/io5";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Footer = ({ clearCompletedTodo }: any) => {
  return (
    <div style={{ textAlign: "right", cursor: "pointer" }}>
      <div className={style.footer_btn} onClick={clearCompletedTodo}>
        <div className={style.footer_btnGroups}>
          <div className="pr-1.5">
            <IoCalendarClear />
          </div>
          <div>Clear Completed</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
