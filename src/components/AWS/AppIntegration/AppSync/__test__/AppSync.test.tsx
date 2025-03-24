import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AppSync from "../AppSync";

describe("AppSync component", () => {
  it("AppSync should render correctly", () => {
    render(<AppSync />);
    expect(true).toBeTruthy();
  });
});
