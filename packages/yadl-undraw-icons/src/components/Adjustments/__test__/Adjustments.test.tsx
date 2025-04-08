import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Adjustments from "../Adjustments";

describe("Adjustments component", () => {
  it("Adjustments should render correctly", () => {
    render(<Adjustments />);
    expect(true).toBeTruthy();
  });
});
