 import React from "react";
 import { Outlet, NavLink } from "react-router-dom";
 import ROUTES from "./routes";

 export default function AppLayout() {
    return (
        <div>
            <nav>
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
                        <NavLink to={ROUTES.createPostRoute()} >
                            Create Post
                        </NavLink>
                    </li>
                </ul>   
            </nav>
            <Outlet/>
        </div>
    );
}