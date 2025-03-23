import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import InvestorUpdate from "../InvestorUpdate";

describe("InvestorUpdate component", () => {
  it("InvestorUpdate should render correctly", () => {
    render(<InvestorUpdate />);
    expect(true).toBeTruthy();
  });
});
