import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import moment from "moment";
import { DATE_FORMAT } from "./components/timeline/constants";
import { dataMock } from "./components/timeline/dataMock";
import TimeLineListItem from "./components/timeline/timeline-list-item";
import TimeLineItemsList from "./components/timeline/timeline-items-list";

let container: HTMLDivElement | null = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  if (container) {
    unmountComponentAtNode(container);
  }
  container?.remove();
  container = null;
});

it("render all timeline childrens", () => {
  const today = new Date();
  const expectedEvents = dataMock.filter((el) =>
    moment(moment(el.date).format(DATE_FORMAT)).isSame(
      moment(today).format(DATE_FORMAT),
      "day"
    )
  );
  act(() => {
    render(
      <TimeLineItemsList data={dataMock} selectedDate={today} />,
      container
    );
  });
  const renderedEventsAmount =
    container?.querySelector(".timelineItemsList")?.children.length;
  expect(renderedEventsAmount).toBe(expectedEvents.length);
});

it("render correct element position", () => {
  const data = dataMock[0];
  const expectedPosition = `${+data.timeFrom.split(":")[0] * 60}px`;
  act(() => {
    render(<TimeLineListItem element={data} />, container);
  });
  const renderedPosition =
    container?.querySelector<HTMLElement>("#time-line-element")?.style.left;
  expect(renderedPosition).toBe(expectedPosition);
});
