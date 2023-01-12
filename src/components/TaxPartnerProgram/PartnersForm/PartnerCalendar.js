import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "../TaxPartnerProgram.module.css";

export default function PartnerCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} className={styles.Calendar} />
    </div>
  );
}
