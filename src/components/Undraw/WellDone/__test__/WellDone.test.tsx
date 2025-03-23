import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WellDone from "../WellDone";

describe("WellDone component", () => {
  it("WellDone should render correctly", () => {
    render(<WellDone />);
    expect(true).toBeTruthy();
  });
});
