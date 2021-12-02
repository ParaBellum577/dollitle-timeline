import React, { memo, useMemo } from "react";
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

  const elementPosition = useMemo(() => {
    return MIN_IN_HOUR * +timeFrom.split(":")[0];
  }, [timeFrom]);

  const elementWidth = useMemo(() => {
    return moment
    .duration(moment(timeTo, TIME_FORMAT).diff(moment(timeFrom, TIME_FORMAT)))
    .asMinutes();
  }, [timeFrom, timeTo]);

  return (
    <div className={`${styles.timelineListItem} ${styles.widthContainer}`}>
      <div style={{ left: `${elementPosition}px`, width: `${elementWidth}px` }}>
        <span>{element.title}</span>
      </div>
    </div>
  );
};

export default memo(TimeLineListItem);
