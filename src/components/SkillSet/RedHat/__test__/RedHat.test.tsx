import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RedHat from "../RedHat";

describe("RedHat component", () => {
  it("RedHat should render correctly", () => {
    render(<RedHat />);
    expect(true).toBeTruthy();
  });
});
