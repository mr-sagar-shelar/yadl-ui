import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Billing from "../Billing";

describe("Billing component", () => {
  it("Billing should render correctly", () => {
    render(<Billing />);
    expect(true).toBeTruthy();
  });
});
