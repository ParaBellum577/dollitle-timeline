import React, { memo, useCallback } from "react";
import moment, { Moment } from "moment";
import _ from "lodash";
import styles from "./index.module.scss";
import TimeLineListItem from "./timeline-list-item";
import { TimelineItemData } from "../../types";

const DATE_FORMAT = "YYYY-MM-DD";

type Props = {
  data: TimelineItemData[];
  selectedDate: Date;
};

const TimeLineItemsList: React.FC<Props> = ({ data, selectedDate }) => {
  const isSameDay = useCallback((a: Moment, b: Date) => {
    return moment(moment(a).format(DATE_FORMAT)).isSame(
      moment(b).format(DATE_FORMAT),
      "day"
    );
  }, []);
  return (
    <div className={`${styles.timelineItemsList} ${styles.widthContainer}`}>
      {!_.isEmpty(data) &&
        _.map(
          data,
          (el) =>
            isSameDay(el.date, selectedDate) && (
              <TimeLineListItem key={el.id} element={el} />
            )
        )}
    </div>
  );
};

export default memo(TimeLineItemsList);
