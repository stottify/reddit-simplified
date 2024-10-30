import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import ROUTES from "../../App/routes";
import styles from "./NavBar.module.css";
import Hamburger from "./Hamburger";

 export default function NavBar() {

    const [hamburgerOpen, setHamburgerOpen] = useState(true);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }

    return (
        <div>
            <nav className={hamburgerOpen ? styles.navBar : styles.hamburgerOpen}>
                <ul>
                    <li>
                        <NavLink to={ROUTES.homeRoute()} >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={ROUTES.popularRoute()} >
                            Popular
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={ROUTES.subredditsRoute()} >
                            Subreddits
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={hamburgerOpen ? styles.createPost : styles.hamburgerOpenCreatePost} to={ROUTES.createPostRoute()} >
                            Create Post
                        </NavLink>
                    </li>
                </ul>
                <div className={hamburgerOpen ? styles.hamburger : styles.hamburgerActive} onClick={toggleHamburger}>
                    <Hamburger />
                </div>   
            </nav>
            <Outlet/>
        </div>
    );
}