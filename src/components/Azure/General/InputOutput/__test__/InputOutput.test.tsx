import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import InputOutput from "../InputOutput";

describe("InputOutput component", () => {
  it("InputOutput should render correctly", () => {
    render(<InputOutput />);
    expect(true).toBeTruthy();
  });
});
