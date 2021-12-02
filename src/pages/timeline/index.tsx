import React, { useState } from "react";
import styles from "./index.module.scss";
import TimeLineHeader from "../../components/timeline/timeline-header";
import TimeLineItemsList from "../../components/timeline/timeline-items-list";
import DatePickerComponent from "../../components/date-picker";
import { dataMock } from '../../components/timeline/dataMock';

type Props = {};

const headers = [
  {
    timestamp: "00:00",
    value: 0,
  },
  {
    timestamp: "06:00",
    value: 6,
  },
  {
    timestamp: "12:00",
    value: 12,
  },
  {
    timestamp: "18:00",
    value: 18,
  },
  {
    timestamp: "23:00",
    value: 23,
  },
];

const TimeLineComponent: React.FC<Props> = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleSetDate = (date: Date) => setSelectedDate(date);

  return (
    <div className={styles.root}>
      <div className={styles.tableWrapper}>
        <div>
          <DatePickerComponent
            handleSetDate={handleSetDate}
            selectedDate={selectedDate}
          />
        </div>
        <div className={styles.table}>
          <TimeLineHeader data={headers} />
          <TimeLineItemsList selectedDate={selectedDate} data={dataMock} />
        </div>
      </div>
    </div>
  );
};

export default TimeLineComponent;
