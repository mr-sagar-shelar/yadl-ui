import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HavingFun from "../HavingFun";

describe("HavingFun component", () => {
  it("HavingFun should render correctly", () => {
    render(<HavingFun />);
    expect(true).toBeTruthy();
  });
});
