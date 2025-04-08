import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BusinessProcessTracking from "../BusinessProcessTracking";

describe("BusinessProcessTracking component", () => {
  it("BusinessProcessTracking should render correctly", () => {
    render(<BusinessProcessTracking />);
    expect(true).toBeTruthy();
  });
});
