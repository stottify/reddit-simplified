import React from "react";
import logo from "../../Assets/Logo/StreamlinedRedditLogoOrange.png";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
    return (
        <div className={styles.searchBarContainer}>
            <img src={logo} alt="logo" className={styles.logo}/>
            <div className={styles.searchBar}>
                <input
                    className={styles.searchBarInput}
                    type="text"
                    placeholder="Search..."
                />
            </div>
        </div>
    );
}