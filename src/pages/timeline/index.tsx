import React from "react";
import moment from "moment";
import styles from "./index.module.scss";
import TimeLineHeader from "../../components/timeline/timeline-header";
import TimeLineItemsList from "../../components/timeline/timeline-items-list";

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
    title: 'Title 1',
    date: moment(),
    timeFrom: '07:30',
    timeTo: '09:00',
  },
  {
    id: 2,
    title: 'Title 2',
    date: moment(),
    timeFrom: '17:00',
    timeTo: '20:00',
  },
  {
    id: 3,
    title: 'Title 3',
    date: moment(),
    timeFrom: '01:30',
    timeTo: '10:00',
  },
]
const TimeLineComponent: React.FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className={styles.tableWrapper}>
        <TimeLineHeader data={headers} />
        <TimeLineItemsList data={dataMock} />
      </div>
    </div>
  );
};

export default TimeLineComponent;
