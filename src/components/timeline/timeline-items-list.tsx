import React, { memo } from "react";
import { Moment } from "moment";
import _ from "lodash";
import styles from "./index.module.scss";
import TimeLineListItem from "./timeline-list-item";

type Props = {
  data: {
    id: number;
    title: string;
    date: Moment;
    timeFrom: string;
    timeTo: string;
  }[];
};

const TimeLineItemsList: React.FC<Props> = ({ data }) => {
  return (
    <div className={`${styles.timelineItemsList} ${styles.widthContainer}`}>
      {!_.isEmpty(data) &&
        _.map(data, (el) => <TimeLineListItem key={el.id} element={el} />)}
    </div>
  );
};

export default memo(TimeLineItemsList);
