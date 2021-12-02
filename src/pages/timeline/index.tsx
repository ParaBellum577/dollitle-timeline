import React, { useState } from "react";
import moment from "moment";
import styles from "./index.module.scss";
import TimeLineHeader from "../../components/timeline/timeline-header";
import TimeLineItemsList from "../../components/timeline/timeline-items-list";
import DatePickerComponent from "../../components/date-picker";

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
const dataMock = [
  {
    id: 1,
    title: "Title 1",
    date: moment(),
    timeFrom: "07:30",
    timeTo: "09:00",
  },
  {
    id: 2,
    title: "Title 2",
    date: moment().add(1, 'days'),
    timeFrom: "03:00",
    timeTo: "08:00",
  },
  {
    id: 3,
    title: "Title 3",
    date: moment(),
    timeFrom: "01:30",
    timeTo: "10:00",
  },
  {
    id: 4,
    title: "Title 3",
    date: moment(),
    timeFrom: "17:00",
    timeTo: "20:00",
  },
  {
    id: 5,
    title: "Title 2",
    date: moment().add(1, 'days'),
    timeFrom: "11:00",
    timeTo: "13:00",
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
