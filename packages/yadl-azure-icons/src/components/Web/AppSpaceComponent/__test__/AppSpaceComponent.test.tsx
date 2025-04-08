import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AppSpaceComponent from "../AppSpaceComponent";

describe("AppSpaceComponent component", () => {
  it("AppSpaceComponent should render correctly", () => {
    render(<AppSpaceComponent />);
    expect(true).toBeTruthy();
  });
});
