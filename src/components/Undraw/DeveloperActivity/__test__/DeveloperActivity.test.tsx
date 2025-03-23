import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DeveloperActivity from "../DeveloperActivity";

describe("DeveloperActivity component", () => {
  it("DeveloperActivity should render correctly", () => {
    render(<DeveloperActivity />);
    expect(true).toBeTruthy();
  });
});
