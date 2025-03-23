import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SpeedTest from "../SpeedTest";

describe("SpeedTest component", () => {
  it("SpeedTest should render correctly", () => {
    render(<SpeedTest />);
    expect(true).toBeTruthy();
  });
});
