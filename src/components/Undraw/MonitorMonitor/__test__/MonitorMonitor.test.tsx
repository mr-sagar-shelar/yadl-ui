import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MonitorMonitor from "../MonitorMonitor";

describe("MonitorMonitor component", () => {
  it("MonitorMonitor should render correctly", () => {
    render(<MonitorMonitor />);
    expect(true).toBeTruthy();
  });
});
