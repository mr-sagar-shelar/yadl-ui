import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DefenderRelay from "../DefenderRelay";

describe("DefenderRelay component", () => {
  it("DefenderRelay should render correctly", () => {
    render(<DefenderRelay />);
    expect(true).toBeTruthy();
  });
});
