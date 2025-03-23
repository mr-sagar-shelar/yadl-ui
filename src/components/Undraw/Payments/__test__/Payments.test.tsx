import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Payments from "../Payments";

describe("Payments component", () => {
  it("Payments should render correctly", () => {
    render(<Payments />);
    expect(true).toBeTruthy();
  });
});
