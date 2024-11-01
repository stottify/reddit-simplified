import React from "react";
import styles from "./Hamburger.module.css";

const Hamburger = (props) => {
    const isOpen = props.isOpen;
    return (
        <>
        <div className={styles.hamburger}>
            <div className={isOpen ? styles.burger : styles.burger1}/>
            <div className={isOpen ? styles.burger : styles.burger2}/>
            <div className={isOpen ? styles.burger : styles.burger3}/>
        </div>
        </>
    )
}

export default Hamburger;