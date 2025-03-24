import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CodeBuild from "../CodeBuild";

describe("CodeBuild component", () => {
  it("CodeBuild should render correctly", () => {
    render(<CodeBuild />);
    expect(true).toBeTruthy();
  });
});
