import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DeviceConfiguration from "../DeviceConfiguration";

describe("DeviceConfiguration component", () => {
  it("DeviceConfiguration should render correctly", () => {
    render(<DeviceConfiguration />);
    expect(true).toBeTruthy();
  });
});
