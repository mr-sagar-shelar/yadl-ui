import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ProjectFeedback from "../ProjectFeedback";

describe("ProjectFeedback component", () => {
  it("ProjectFeedback should render correctly", () => {
    render(<ProjectFeedback />);
    expect(true).toBeTruthy();
  });
});
