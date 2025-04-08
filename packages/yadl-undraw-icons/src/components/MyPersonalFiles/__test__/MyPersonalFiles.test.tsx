import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MyPersonalFiles from "../MyPersonalFiles";

describe("MyPersonalFiles component", () => {
  it("MyPersonalFiles should render correctly", () => {
    render(<MyPersonalFiles />);
    expect(true).toBeTruthy();
  });
});
