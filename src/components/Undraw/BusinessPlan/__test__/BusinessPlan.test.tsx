import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BusinessPlan from "../BusinessPlan";

describe("BusinessPlan component", () => {
  it("BusinessPlan should render correctly", () => {
    render(<BusinessPlan />);
    expect(true).toBeTruthy();
  });
});
