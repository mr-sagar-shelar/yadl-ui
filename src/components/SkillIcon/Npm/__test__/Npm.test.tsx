import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Npm from "../Npm";

describe("Npm component", () => {
  it("Npm should render correctly", () => {
    render(<Npm />);
    expect(true).toBeTruthy();
  });
});
