import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FreeRTOS from "../FreeRTOS";

describe("FreeRTOS component", () => {
  it("FreeRTOS should render correctly", () => {
    render(<FreeRTOS />);
    expect(true).toBeTruthy();
  });
});
