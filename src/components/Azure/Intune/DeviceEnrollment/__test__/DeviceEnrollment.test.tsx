import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DeviceEnrollment from "../DeviceEnrollment";

describe("DeviceEnrollment component", () => {
  it("DeviceEnrollment should render correctly", () => {
    render(<DeviceEnrollment />);
    expect(true).toBeTruthy();
  });
});
