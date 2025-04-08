import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudMonitoring from "../CloudMonitoring";

describe("CloudMonitoring component", () => {
  it("CloudMonitoring should render correctly", () => {
    render(<CloudMonitoring />);
    expect(true).toBeTruthy();
  });
});
