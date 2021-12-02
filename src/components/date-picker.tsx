import React, { FC } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  handleSetDate: (date: Date) => void;
  selectedDate: Date;
};

const DatePickerComponent: FC<Props> = ({ selectedDate, handleSetDate }) => {
  return <DatePicker selected={selectedDate} onChange={handleSetDate} />;
};

export default DatePickerComponent;
