import Logo from "@/components/Logo";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { NavLink } from "react-router-dom";
import styles from "./MobileNavbar.module.scss";
import cls from "classnames";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("body-locked");
    } else {
      document.body.classList.remove("body-locked");
    }
  }, [isOpen]);

  return (
    <div className={styles.navbar}>
      <div className={styles.header}>
        <Logo size={50} />
        <button
          className={cls(styles.menuBtn, {
            [styles.active]: isOpen,
          })}
          onClick={() => setIsOpen((x) => !x)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {isOpen && (
        <div className={styles.collapse}>
          <nav onClick={() => setIsOpen(false)}>
            <NavLink to="/" children="Anasayfa" />
            <NavLink to="/favoriler" children="Favoriler" />
            {user ? (
              <NavLink onClick={logout} children="Logout" />
            ) : (
              <NavLink to="/login" children="Login" />
            )}
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
