import React, { memo } from "react";
import moment, { Moment } from "moment";
import styles from "./index.module.scss";
import { MIN_IN_HOUR, TIME_FORMAT } from "./constants";

type Props = {
  element: {
    id: number;
    title: string;
    date: Moment;
    timeFrom: string;
    timeTo: string;
  };
};

const TimeLineListItem: React.FC<Props> = ({ element }) => {
  const { timeFrom, timeTo } = element;
  const elementPosition = MIN_IN_HOUR * +element.timeFrom.split(":")[0];
  const elementWidth = moment
    .duration(moment(timeTo, TIME_FORMAT).diff(moment(timeFrom, TIME_FORMAT)))
    .asMinutes();
  return (
    <div className={`${styles.timelineListItem} ${styles.widthContainer}`}>
      <div style={{ left: `${elementPosition}px`, width: `${elementWidth}px` }}>
        <span>{element.title}</span>
      </div>
    </div>
  );
};

export default memo(TimeLineListItem);
