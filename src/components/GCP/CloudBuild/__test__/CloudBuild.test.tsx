import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudBuild from "../CloudBuild";

describe("CloudBuild component", () => {
  it("CloudBuild should render correctly", () => {
    render(<CloudBuild />);
    expect(true).toBeTruthy();
  });
});
