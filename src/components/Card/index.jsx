import styles from "../../App.module.css";
export function Card(props) {
  return (
    <div className={styles.card}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}
