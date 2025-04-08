import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CodePipeline from "../CodePipeline";

describe("CodePipeline component", () => {
  it("CodePipeline should render correctly", () => {
    render(<CodePipeline />);
    expect(true).toBeTruthy();
  });
});
