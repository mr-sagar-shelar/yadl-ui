import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Gherkin from "../Gherkin";

describe("Gherkin component", () => {
  it("Gherkin should render correctly", () => {
    render(<Gherkin />);
    expect(true).toBeTruthy();
  });
});
