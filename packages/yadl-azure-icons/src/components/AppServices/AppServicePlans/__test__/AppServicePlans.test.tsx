import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AppServicePlans from "../AppServicePlans";

describe("AppServicePlans component", () => {
  it("AppServicePlans should render correctly", () => {
    render(<AppServicePlans />);
    expect(true).toBeTruthy();
  });
});
