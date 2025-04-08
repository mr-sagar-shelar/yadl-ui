import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HealthyLifestyle from "../HealthyLifestyle";

describe("HealthyLifestyle component", () => {
  it("HealthyLifestyle should render correctly", () => {
    render(<HealthyLifestyle />);
    expect(true).toBeTruthy();
  });
});
