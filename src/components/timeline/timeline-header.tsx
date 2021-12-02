import React, { memo } from "react";
import _ from "lodash";
import { MIN_IN_HOUR } from "./constants";
import styles from "./index.module.scss";

type Props = {
  data: {
    timestamp: string;
    value: number;
  }[];
};

const TimeLineHeader: React.FC<Props> = ({ data }) => {
  return (
    <div className={`${styles.timelineHeader} ${styles.widthContainer}`}>
      {!_.isEmpty(data) &&
        _.map(data, (el) => (
          <span
            key={el.value}
            style={{ left: `${el.value * MIN_IN_HOUR}px` }}
            className={styles.timelineHeaderTimestamp}
          >
            {el.timestamp}
          </span>
        ))}
    </div>
  );
};

export default memo(TimeLineHeader);
