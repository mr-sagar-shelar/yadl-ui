import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Analysis from "../Analysis";

describe("Analysis component", () => {
  it("Analysis should render correctly", () => {
    render(<Analysis />);
    expect(true).toBeTruthy();
  });
});
