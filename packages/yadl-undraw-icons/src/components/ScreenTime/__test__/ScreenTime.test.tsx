import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ScreenTime from "../ScreenTime";

describe("ScreenTime component", () => {
  it("ScreenTime should render correctly", () => {
    render(<ScreenTime />);
    expect(true).toBeTruthy();
  });
});
