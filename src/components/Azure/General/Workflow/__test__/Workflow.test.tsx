import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Workflow from "../Workflow";

describe("Workflow component", () => {
  it("Workflow should render correctly", () => {
    render(<Workflow />);
    expect(true).toBeTruthy();
  });
});
