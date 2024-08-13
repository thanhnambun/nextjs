import React from "react";
import styles from "../moduleCSS/Alert.module.css"
type Alert = {
  type: "success" | "info" | "warning" | "error";
  message: string;
};

export default function Bt9() {
  const alerts: Alert[] = [
    { type: "success", message: "Operation was successful!" },
    { type: "info", message: "Here is some information for you." },
    { type: "warning", message: "Be careful with this action." },
    { type: "error", message: "An error has occurred." },
  ];

  return (
    <div>
      {alerts.map((alert, index) => (
        <div key={index} className={ styles[alert.type]}>
          {alert.message}
        </div>
      ))}
    </div>
  );
}
