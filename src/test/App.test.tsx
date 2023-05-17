import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders learn react link", () => {
  // document.body.innerHTML = `
  //   <span data-testid="not-empty"><span data-testid="empty"></span></span>
  //   <div data-testid="visible">Visible Example</div>
  // `;

  render(<App />);

  //expect(screen.queryByTestId("not-empty")).not.toBeEmptyDOMElement();
  //expect(screen.getByText("Visible Example")).toBeVisible();
});
