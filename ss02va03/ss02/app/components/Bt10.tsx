import React from 'react'
import styles from "../moduleCSS/BaseCart.module.scss";


export default function Bt10() {
    const content = "Áo phông nam mát mẻ";
    const title = "Áo phông nam";
    const image ="https://photo.znews.vn/w1200/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg";
    const buttonText = "Thêm vào giỏ hàng";

  return (
    <div className={styles.baseCart}>
      <img src={image} alt={title} className="image" />
      <h2 className="title">{title}</h2>
      <p className="content">{content}</p>
      <button className="primaryButton">{buttonText}</button>
    </div>
  );
}
