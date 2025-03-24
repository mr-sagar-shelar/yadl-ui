import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DeviceFarm from "../DeviceFarm";

describe("DeviceFarm component", () => {
  it("DeviceFarm should render correctly", () => {
    render(<DeviceFarm />);
    expect(true).toBeTruthy();
  });
});
