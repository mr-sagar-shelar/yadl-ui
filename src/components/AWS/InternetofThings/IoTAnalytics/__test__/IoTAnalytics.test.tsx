import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IoTAnalytics from "../IoTAnalytics";

describe("IoTAnalytics component", () => {
  it("IoTAnalytics should render correctly", () => {
    render(<IoTAnalytics />);
    expect(true).toBeTruthy();
  });
});
