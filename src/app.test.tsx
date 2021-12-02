import TimeLineListItem from "./components/timeline/timeline-list-item";
import TimeLineItemsList from "./components/timeline/timeline-items-list";
import { dataMock } from "./components/timeline/dataMock";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

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
  act(() => {
    render(
      <TimeLineItemsList data={dataMock} selectedDate={new Date()} />,
      container
    );
  });
  expect(container?.querySelector(".timelineItemsList")?.children.length).toBe(
    3
  );
});

it("render correct element position", () => {
  const mock = dataMock[0];
  act(() => {
    render(<TimeLineListItem element={mock} />, container);
  });
  expect(container?.querySelector<HTMLElement>("#time-line-element")?.style.left).toBe(
    `${+mock.timeFrom.split(":")[0] * 60}px`
  );
});
