import React from "react";
import styles from "../moduleCSS/FormLogin.module.css";

export default function FormLogin() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Form Sign up</h2>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            className={styles.input}
            placeholder="Your name"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={styles.input}
            placeholder="you@company.com"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="phone">
            Phone number
          </label>
          <input
            id="phone"
            type="tel"
            className={styles.input}
            placeholder="+84 (123) 456-789"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="address">
            Address
          </label>
          <textarea
            id="address"
            className={styles.textarea}
            placeholder="Tell us a little about the project..."
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Skills</label>
          <div className={styles.skills}>
            <label className={styles.skill}>
              <input type="checkbox" /> HTML
            </label>
            <label className={styles.skill}>
              <input type="checkbox" /> JavaScript
            </label>
            <label className={styles.skill}>
              <input type="checkbox" /> UX design
            </label>
            <label className={styles.skill}>
              <input type="checkbox" /> ReactJS
            </label>
            <label className={styles.skill}>
              <input type="checkbox" /> CSS
            </label>
            <label className={styles.skill}>
              <input type="checkbox" /> Java
            </label>
          </div>
        </div>

        <button type="submit" className={styles.button}>
          Sign up
        </button>
      </form>
    </div>
  );
}
