import { Suspense } from 'react';
import { NavLink, Outlet, useLocation } from "react-router-dom";

import css from './Layout.module.scss';

const Layout = () => {
    const location = useLocation();

    return (
        <>
            <header>
                <nav className={css.nav}>
                    <NavLink
                        className={location.pathname !== "/"
                            ? css.btn
                            : css["btn-current"]}
                        to="/">
                        Home
                    </NavLink>
                    <NavLink
                        className={location.pathname === "/"
                            ? css.btn
                            : css["btn-current"]}
                        to="/movies">
                        Movies
                    </NavLink>
                </nav>
            </header>
            <main>
                <Suspense>
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
};

export default Layout;