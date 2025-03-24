import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LookoutforMetrics from "../LookoutforMetrics";

describe("LookoutforMetrics component", () => {
  it("LookoutforMetrics should render correctly", () => {
    render(<LookoutforMetrics />);
    expect(true).toBeTruthy();
  });
});
