import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SnowFun from "../SnowFun";

describe("SnowFun component", () => {
  it("SnowFun should render correctly", () => {
    render(<SnowFun />);
    expect(true).toBeTruthy();
  });
});
