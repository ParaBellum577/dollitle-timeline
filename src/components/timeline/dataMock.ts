import moment from "moment";

export const dataMock = [
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