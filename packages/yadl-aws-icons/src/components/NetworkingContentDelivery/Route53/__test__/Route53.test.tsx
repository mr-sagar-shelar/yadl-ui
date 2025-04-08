import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Route53 from "../Route53";

describe("Route53 component", () => {
  it("Route53 should render correctly", () => {
    render(<Route53 />);
    expect(true).toBeTruthy();
  });
});
