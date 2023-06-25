import { render, screen } from "@testing-library/react";
import InputField from "../../shared/inputField";

describe("InputField component", () => {
  it("should be rendered", () => {
    render(<InputField id="test-field" value="" onChange={() => {}} />);

    expect(screen.getByTestId("inputField")).toBeInTheDocument();
  });

  it("should have initial value 'test-input'", () => {
    render(
      <InputField id="test-field" value="test-input" onChange={() => {}} />
    );

    expect(screen.getByTestId("inputField")).toHaveValue("test-input");
  });

  it("should have label 'test-label'", () => {
    render(
      <InputField
        id="test-field"
        label="test-label"
        value=""
        onChange={() => {}}
      />
    );

    expect(screen.getByText("test-label")).toBeInTheDocument();
  });

  it("should have invalid text and invalid styling", () => {
    render(
      <InputField
        id="test-field"
        label="test-label"
        invalid="This test field is required"
        value=""
        onChange={() => {}}
      />
    );

    const label = screen.getByText("test-label");
    const inputField = screen.getByTestId("inputField");
    const invalidMessage = screen.getByTestId("inputInvalidMessage");

    expect(label).toHaveClass("labelInvalid", { exact: false });
    expect(inputField).toHaveClass("inputInvalid", { exact: false });
    expect(invalidMessage).toBeInTheDocument();
  });

  it("should not have invalid text and invalid styling", () => {
    render(
      <InputField
        id="test-field"
        label="test-label"
        value=""
        onChange={() => {}}
      />
    );

    const label = screen.getByText("test-label");
    const inputField = screen.getByTestId("inputField");
    const invalidMessage = screen.queryByTestId("inputInvalidMessage");

    expect(label).not.toHaveClass("labelInvalid", { exact: false });
    expect(inputField).not.toHaveClass("inputInvalid", { exact: false });
    expect(invalidMessage).not.toBeInTheDocument();
  });
});
