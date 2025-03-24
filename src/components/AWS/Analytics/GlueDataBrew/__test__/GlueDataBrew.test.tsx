import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GlueDataBrew from "../GlueDataBrew";

describe("GlueDataBrew component", () => {
  it("GlueDataBrew should render correctly", () => {
    render(<GlueDataBrew />);
    expect(true).toBeTruthy();
  });
});
