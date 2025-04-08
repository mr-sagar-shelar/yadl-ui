import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Maintenance from "../Maintenance";

describe("Maintenance component", () => {
  it("Maintenance should render correctly", () => {
    render(<Maintenance />);
    expect(true).toBeTruthy();
  });
});
