import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TargetsManagement from "../TargetsManagement";

describe("TargetsManagement component", () => {
  it("TargetsManagement should render correctly", () => {
    render(<TargetsManagement />);
    expect(true).toBeTruthy();
  });
});
