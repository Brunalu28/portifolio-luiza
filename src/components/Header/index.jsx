import React, { useState } from "react";
import styles from "../Header/Header.module.css";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div>
      <header className={styles.header}>
        <nav id="nav">
          <button
            id="btnMobile"
            className={styles.btnMobile}
            onClick={toggleMenu}
          >
            Menu
          </button>
          <ul className={`${styles.menu} ${isMenuOpen ? "active" : ""}`}>
            <li>Home</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
