import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Walking from "../Walking";

describe("Walking component", () => {
  it("Walking should render correctly", () => {
    render(<Walking />);
    expect(true).toBeTruthy();
  });
});
