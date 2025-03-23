import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LocationTracking from "../LocationTracking";

describe("LocationTracking component", () => {
  it("LocationTracking should render correctly", () => {
    render(<LocationTracking />);
    expect(true).toBeTruthy();
  });
});
