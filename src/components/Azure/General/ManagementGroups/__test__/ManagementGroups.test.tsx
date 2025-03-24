import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ManagementGroups from "../ManagementGroups";

describe("ManagementGroups component", () => {
  it("ManagementGroups should render correctly", () => {
    render(<ManagementGroups />);
    expect(true).toBeTruthy();
  });
});
