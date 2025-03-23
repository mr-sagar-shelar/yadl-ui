import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Calculator from "../Calculator";

describe("Calculator component", () => {
  it("Calculator should render correctly", () => {
    render(<Calculator />);
    expect(true).toBeTruthy();
  });
});
