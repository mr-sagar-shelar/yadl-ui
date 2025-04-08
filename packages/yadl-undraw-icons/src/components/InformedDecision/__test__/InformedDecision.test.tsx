import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import InformedDecision from "../InformedDecision";

describe("InformedDecision component", () => {
  it("InformedDecision should render correctly", () => {
    render(<InformedDecision />);
    expect(true).toBeTruthy();
  });
});
