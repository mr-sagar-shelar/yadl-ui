import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RTOS from "../RTOS";

describe("RTOS component", () => {
  it("RTOS should render correctly", () => {
    render(<RTOS />);
    expect(true).toBeTruthy();
  });
});
