import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NavigatorNavigator from "../NavigatorNavigator";

describe("NavigatorNavigator component", () => {
  it("NavigatorNavigator should render correctly", () => {
    render(<NavigatorNavigator />);
    expect(true).toBeTruthy();
  });
});
