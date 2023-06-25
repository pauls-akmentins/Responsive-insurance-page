import { render, screen } from "@testing-library/react";
import PageIndication from "../../shared/pageIndication";
import { BrowserRouter } from "react-router-dom";

describe("PageIndication component", () => {
  it("should display page hierarchy of 3 pages", () => {
    render(
      <BrowserRouter>
        <PageIndication pages={["Page 1", "Page 2", "Page 3"]} />
      </BrowserRouter>
    );
    const pageIndicationItems = screen.getAllByText("page", {
      exact: false,
    });

    expect(pageIndicationItems).toHaveLength(3);
  });

  it("should have 0 arrows rendered", () => {
    render(
      <BrowserRouter>
        <PageIndication pages={["Home"]} />
      </BrowserRouter>
    );

    const arrows = screen.queryAllByAltText("arrow right icon", {
      exact: false,
    });

    expect(arrows).toHaveLength(0);
  });

  it("should have 2 arrows rendered", () => {
    render(
      <BrowserRouter>
        <PageIndication pages={["Home", "Policies", "Car Insurance"]} />
      </BrowserRouter>
    );

    const arrows = screen.getAllByAltText("arrow right icon", {
      exact: false,
    });

    expect(arrows).toHaveLength(2);
  });
});
