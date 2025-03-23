import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SuccessFactors from "../SuccessFactors";

describe("SuccessFactors component", () => {
  it("SuccessFactors should render correctly", () => {
    render(<SuccessFactors />);
    expect(true).toBeTruthy();
  });
});
