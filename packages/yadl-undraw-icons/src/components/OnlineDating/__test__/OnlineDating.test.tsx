import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineDating from "../OnlineDating";

describe("OnlineDating component", () => {
  it("OnlineDating should render correctly", () => {
    render(<OnlineDating />);
    expect(true).toBeTruthy();
  });
});
