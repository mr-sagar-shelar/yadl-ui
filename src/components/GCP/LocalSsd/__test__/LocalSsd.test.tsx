import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LocalSsd from "../LocalSsd";

describe("LocalSsd component", () => {
  it("LocalSsd should render correctly", () => {
    render(<LocalSsd />);
    expect(true).toBeTruthy();
  });
});
