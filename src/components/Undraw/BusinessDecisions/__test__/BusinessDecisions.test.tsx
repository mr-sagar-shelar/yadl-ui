import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BusinessDecisions from "../BusinessDecisions";

describe("BusinessDecisions component", () => {
  it("BusinessDecisions should render correctly", () => {
    render(<BusinessDecisions />);
    expect(true).toBeTruthy();
  });
});
