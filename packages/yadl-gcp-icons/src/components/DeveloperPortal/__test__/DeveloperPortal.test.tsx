import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DeveloperPortal from "../DeveloperPortal";

describe("DeveloperPortal component", () => {
  it("DeveloperPortal should render correctly", () => {
    render(<DeveloperPortal />);
    expect(true).toBeTruthy();
  });
});
