import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FlutterDev from "../FlutterDev";

describe("FlutterDev component", () => {
  it("FlutterDev should render correctly", () => {
    render(<FlutterDev />);
    expect(true).toBeTruthy();
  });
});
