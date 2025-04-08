import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Module from "../Module";

describe("Module component", () => {
  it("Module should render correctly", () => {
    render(<Module />);
    expect(true).toBeTruthy();
  });
});
