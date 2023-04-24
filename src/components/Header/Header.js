import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.nav}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/tv">TV</a>
        </li>
        <li>
          <a href="/search">Search</a>
        </li>
      </ul>
    </header>
  );
}
export default Header;
