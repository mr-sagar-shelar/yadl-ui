import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import InThePool from "../InThePool";

describe("InThePool component", () => {
  it("InThePool should render correctly", () => {
    render(<InThePool />);
    expect(true).toBeTruthy();
  });
});
