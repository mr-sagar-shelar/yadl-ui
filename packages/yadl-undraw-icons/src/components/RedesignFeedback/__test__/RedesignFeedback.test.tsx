import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RedesignFeedback from "../RedesignFeedback";

describe("RedesignFeedback component", () => {
  it("RedesignFeedback should render correctly", () => {
    render(<RedesignFeedback />);
    expect(true).toBeTruthy();
  });
});
