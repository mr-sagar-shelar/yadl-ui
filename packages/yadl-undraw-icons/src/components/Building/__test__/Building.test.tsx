import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Building from "../Building";

describe("Building component", () => {
  it("Building should render correctly", () => {
    render(<Building />);
    expect(true).toBeTruthy();
  });
});
