import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ManagementConsole from "../ManagementConsole";

describe("ManagementConsole component", () => {
  it("ManagementConsole should render correctly", () => {
    render(<ManagementConsole />);
    expect(true).toBeTruthy();
  });
});
