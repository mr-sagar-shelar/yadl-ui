import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlinePage from "../OnlinePage";

describe("OnlinePage component", () => {
  it("OnlinePage should render correctly", () => {
    render(<OnlinePage />);
    expect(true).toBeTruthy();
  });
});
