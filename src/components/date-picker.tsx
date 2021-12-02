import React, { FC } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./timeline/index.module.scss";

type Props = {
  handleSetDate: (date: Date) => void;
  selectedDate: Date;
};

const DatePickerComponent: FC<Props> = ({ selectedDate, handleSetDate }) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleSetDate}
      customInput={
        <input
          className={styles.datePickerInput}
          type="text"
          placeholder="select day"
        />
      }
    />
  );
};

export default DatePickerComponent;
