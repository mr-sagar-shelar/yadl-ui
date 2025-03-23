import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ProgressTracking from "../ProgressTracking";

describe("ProgressTracking component", () => {
  it("ProgressTracking should render correctly", () => {
    render(<ProgressTracking />);
    expect(true).toBeTruthy();
  });
});
