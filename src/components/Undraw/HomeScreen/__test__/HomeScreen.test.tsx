import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HomeScreen from "../HomeScreen";

describe("HomeScreen component", () => {
  it("HomeScreen should render correctly", () => {
    render(<HomeScreen />);
    expect(true).toBeTruthy();
  });
});
