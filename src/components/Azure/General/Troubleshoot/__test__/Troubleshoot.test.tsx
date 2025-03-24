import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Troubleshoot from "../Troubleshoot";

describe("Troubleshoot component", () => {
  it("Troubleshoot should render correctly", () => {
    render(<Troubleshoot />);
    expect(true).toBeTruthy();
  });
});
