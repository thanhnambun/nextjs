import classNames from "classnames";
import React from "react";
import styles from "../moduleCSS/BT7.module.css";

type PropTypes = {
  type: "primary" | "danger" | "warning" | "success";
};

export default function Button({ type }: PropTypes) {
  const classObj = classNames(styles.button, {
    [styles.primary]: type === "primary",
    [styles.danger]: type === "danger",
    [styles.warning]: type === "warning",
    [styles.success]: type === "success",
  });

  return (
    <>
      <button className={classObj}>Thêm mới</button>
      <button className={styles.primary}>primary</button>
      <button className={styles.danger}>danger</button>
      <button className={styles.warning}>warning</button>
      <button className={styles.success}>success</button>
    </>
  );
}
