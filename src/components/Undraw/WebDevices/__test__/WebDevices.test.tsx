import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WebDevices from "../WebDevices";

describe("WebDevices component", () => {
  it("WebDevices should render correctly", () => {
    render(<WebDevices />);
    expect(true).toBeTruthy();
  });
});
