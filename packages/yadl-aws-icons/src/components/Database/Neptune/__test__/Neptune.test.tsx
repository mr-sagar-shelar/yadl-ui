import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Neptune from "../Neptune";

describe("Neptune component", () => {
  it("Neptune should render correctly", () => {
    render(<Neptune />);
    expect(true).toBeTruthy();
  });
});
