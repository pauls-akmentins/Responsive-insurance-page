import { render, screen } from "@testing-library/react";
import Modal from "../../shared/modal";

describe("Modal component", () => {
  it("should be rendered", () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <h1>Modal</h1>
      </Modal>
    );

    const modalContent = screen.getByText("Modal");

    expect(modalContent).toBeInTheDocument();
  });

  it("should not be rendered", () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        <h1>Modal</h1>
      </Modal>
    );

    const modalContent = screen.queryByText("Modal");

    expect(modalContent).toBeNull();
  });
});
