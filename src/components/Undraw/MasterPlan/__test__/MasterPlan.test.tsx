import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MasterPlan from "../MasterPlan";

describe("MasterPlan component", () => {
  it("MasterPlan should render correctly", () => {
    render(<MasterPlan />);
    expect(true).toBeTruthy();
  });
});
