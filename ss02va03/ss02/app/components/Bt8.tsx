import React from "react";
import styles from "../moduleCSS/Pagination.module.css";

export default function Bt8() {
  return (
    <div className={styles.pagination}>
      <button className={styles.pageItem}>Previous</button>
      <button className={`${styles.pageItem} ${styles.active}`}>1</button>
      <button className={styles.pageItem}>2</button>
      <button className={styles.pageItem}>3</button>
      <button className={styles.pageItem}>Next</button>
    </div>
  );
}
