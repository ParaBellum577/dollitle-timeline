import { Moment } from "moment";

export type TimelineItemData = {
  id: number;
  title: string;
  date: Moment;
  timeFrom: string;
  timeTo: string;
};