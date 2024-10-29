import React from "react";
import styles from "./Hamburger.module.css";

const Hamburger = () => {
    return (
        <>
        <div className={styles.hamburger}>
            <div className={styles.burger + " burger1"}/>
            <div className={styles.burger + " burger2"}/>
            <div className={styles.burger + " burger3"}/>
        </div>
        </>
    )
}

export default Hamburger;