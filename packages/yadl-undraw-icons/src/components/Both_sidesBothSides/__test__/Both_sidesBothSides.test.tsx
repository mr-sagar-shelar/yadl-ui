import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Both_sidesBothSides from "../Both_sidesBothSides";

describe("Both_sidesBothSides component", () => {
  it("Both_sidesBothSides should render correctly", () => {
    render(<Both_sidesBothSides />);
    expect(true).toBeTruthy();
  });
});
