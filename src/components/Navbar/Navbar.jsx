import Logo from "@/components/Logo";
import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Button from "@/components/Button";

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <div className="container">
      <nav className={styles.navbar}>
        <Logo className={styles.logo} />
        <NavItem to="/" text="Anasayfa" />
        <NavItem to="/favoriler" text="Favoriler" />
        {user ? (
          <NavItem onClick={logout} text="Logout" />
        ) : (
          <NavItem to="/login" text="Login" />
        )}
      </nav>
    </div>
  );
};

const NavItem = ({ to, text, onClick }) => {
  if (onClick) {
    return (
      <Button className={styles.navItem} onClick={onClick}>
        {text}
      </Button>
    );
  }
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [isActive ? styles.active : ""].concat(styles.navItem).join(" ")
      }
    >
      {text}
    </NavLink>
  );
};
export default Navbar;
