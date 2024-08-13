import React from 'react'
import styles from "../moduleCSS/Popup.module.scss";

export default function Bt5() {
  return (
    <div className={styles.popup}>
      <div className={styles["popup-icon"]}>
        <span className={styles["exclamation-mark"]}>!</span>
      </div>
      <div className={styles["popup-content"]}>
        <h2>Delete blog post</h2>
        <p>
          Are you sure you want to delete this post? This action cannot be
          undone.
        </p>
        <div className={styles["popup-actions"]}>
          <button className={styles["btn-cancel"]}>Cancel</button>
          <button className={styles["btn-delete"]}>Delete</button>
        </div>
      </div>
    </div>
  );
}
