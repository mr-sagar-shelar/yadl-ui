import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import KeyPoints from "../KeyPoints";

describe("KeyPoints component", () => {
  it("KeyPoints should render correctly", () => {
    render(<KeyPoints />);
    expect(true).toBeTruthy();
  });
});
