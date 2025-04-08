import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import QAEngineersQAEngineers from "../QAEngineersQAEngineers";

describe("QAEngineersQAEngineers component", () => {
  it("QAEngineersQAEngineers should render correctly", () => {
    render(<QAEngineersQAEngineers />);
    expect(true).toBeTruthy();
  });
});
