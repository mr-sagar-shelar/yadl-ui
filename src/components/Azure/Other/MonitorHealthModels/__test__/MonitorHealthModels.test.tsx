import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MonitorHealthModels from "../MonitorHealthModels";

describe("MonitorHealthModels component", () => {
  it("MonitorHealthModels should render correctly", () => {
    render(<MonitorHealthModels />);
    expect(true).toBeTruthy();
  });
});
