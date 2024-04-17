import React from "react";
import styles from "./header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className="header_title">
        <span className={styles.headerTop}>Good Afternoon, Hiền</span>
        <span className={styles.dot}>.</span>
      </div>
      <div className={styles.headerBottom}>Remove doubts with action</div>
    </div>
  );
};

export default Header;
