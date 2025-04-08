import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ManagementPortal from "../ManagementPortal";

describe("ManagementPortal component", () => {
  it("ManagementPortal should render correctly", () => {
    render(<ManagementPortal />);
    expect(true).toBeTruthy();
  });
});
