import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Share from "../Share";

describe("Share component", () => {
  it("Share should render correctly", () => {
    render(<Share />);
    expect(true).toBeTruthy();
  });
});
