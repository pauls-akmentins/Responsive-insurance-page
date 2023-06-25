import { render, screen } from "@testing-library/react";
import Button from "../../shared/button";

describe("Button component", () => {
  it("should be rendered", () => {
    render(<Button>Simple Button</Button>);

    expect(screen.getByTestId("button")).toBeInTheDocument();
  });

  it("should have text as provided children", () => {
    render(<Button>Simple Button</Button>);

    expect(screen.getByText("Simple Button")).toBeInTheDocument();
  });

  it("should be primary variant by default", () => {
    render(<Button>Simple Button</Button>);

    expect(screen.getByTestId("button")).toHaveClass("btn-primary", {
      exact: false,
    });
  });

  it("should be secondary variant", () => {
    render(<Button variant="secondary">Simple Button</Button>);

    expect(screen.getByTestId("button")).not.toHaveClass("btn-primary", {
      exact: false,
    });

    expect(screen.getByTestId("button")).toHaveClass("btn-secondary", {
      exact: false,
    });
  });

  it("should apply margin to the right", () => {
    render(<Button applyRightMargin>Simple Button</Button>);

    expect(screen.getByTestId("button")).toHaveClass("applyRightMargin", {
      exact: false,
    });
  });
});
