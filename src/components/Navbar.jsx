import { useAuthValue } from "../contexts/AuthContexts";
import { useAuthentication } from "../hooks/useAuthentication";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {

    const {logout} = useAuthentication();
    const {user} = useAuthValue();
        return(
            <nav className="{styles.navbar}">
                <NavLink to="/" className={styles.brand}>
                    Mini <span>blog</span>
                </NavLink>
                <ul className={styles.links_list}>
                    <li>
                    <NavLink to="/" className={({isActive}) => (isActive ? styles.active: "")}>
                        Home
                    </NavLink>
                    </li>
                    {!user && (
                        <>
                    <li>
                        <NavLink to="/login" className={({isActive}) => (isActive ? styles.active: "")}>
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/register" className={({isActive}) => (isActive ? styles.active: "")}>
                            Cadastrar
                        </NavLink>
                    </li>
                    </>
                    )}
                    <li>
                        <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : "")}>
                            Sobre
                        </NavLink>
                    </li>
                    {user &&(
                        <>
                        <li>
                            <NavLink to="/create/posts"
                            className={({isActive}) => (isActive ? styles.active: "")}>
                                Novo
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard"
                            className={({isActive}) => (isActive ? styles.active:"")}
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        </>
                    )}
                    {user&&(
                        <li>
                            <button onClick={logout}>Sair</button>
                        </li>
                    )}
                </ul>
            </nav>
        );
}
export default NavBar;  