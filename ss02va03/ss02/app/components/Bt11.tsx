"use client";
import { useState } from "react";
import moment from "moment";
import styles from "../moduleCSS/Bt11.module.css"; 
export default function Bt11() {
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedDate, setSelectedDate] = useState(null);

  const startOfMonth = currentDate.clone().startOf("month");
  const startOfWeek = startOfMonth.clone().startOf("week");
  const endOfMonth = currentDate.clone().endOf("month");
  const endOfWeek = endOfMonth.clone().endOf("week");

  const handlePreviousMonth = () => {
    setCurrentDate(currentDate.clone().subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.clone().add(1, "month"));
  };

  const handleSetDate = () => {
    setCurrentDate(moment());
    setSelectedDate(moment());
  };

  const days = [];
  let day: any = startOfWeek;

  while (day <= endOfWeek) {
    days.push(
      <div
        key={day.format("DD-MM-YYYY")}
        className={`${styles.day} ${
          day.isSame(currentDate, "month") ? "" : styles.disabled
        } 
            ${day.isSame(selectedDate, "day") ? styles.selected : ""}
            ${day.isSame(moment(), "day") ? styles.today : ""}`}
        onClick={() => {
          if (day.isSame(currentDate, "month")) {
            setSelectedDate(day);
          }
        }}
      >
        {day.date()}
      </div>
    );
    day = day.clone().add(1, "day");
  }

  return (
    <div>
      <div className={styles.datePicker}>
        <div className={styles.header}>
          <button className={styles.button} onClick={handlePreviousMonth}>
            &lt;
          </button>
          <span>{currentDate.format("MMMM YYYY")}</span>
          <button className={styles.button} onClick={handleNextMonth}>
            &gt;
          </button>
        </div>
        <div className={styles.weekdays}>
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
            <div key={day} className={styles.weekday}>
              {day}
            </div>
          ))}
        </div>
        <div className={styles.days}>{days}</div>
        <div className={styles.footer}>
          <button
            className={styles.button}
            onClick={() => setSelectedDate(null)}
          >
            Cancel
          </button>
          <button className={styles.button} onClick={handleSetDate}>
            Set date
          </button>
        </div>
      </div>
    </div>
  );
}
