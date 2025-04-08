import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GroupHangout from "../GroupHangout";

describe("GroupHangout component", () => {
  it("GroupHangout should render correctly", () => {
    render(<GroupHangout />);
    expect(true).toBeTruthy();
  });
});
