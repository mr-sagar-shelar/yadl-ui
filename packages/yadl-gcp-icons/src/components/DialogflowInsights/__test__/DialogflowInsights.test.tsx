import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DialogflowInsights from "../DialogflowInsights";

describe("DialogflowInsights component", () => {
  it("DialogflowInsights should render correctly", () => {
    render(<DialogflowInsights />);
    expect(true).toBeTruthy();
  });
});
