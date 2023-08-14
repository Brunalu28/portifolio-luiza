import styles from "../Header/Header.module.css";

export function Header() {
  return (
    <div>
      <header className={styles.header}>
        <h2>Home</h2>
        <h2>Work</h2>
        <h2>Contact</h2>
      </header>
    </div>
  );
}
