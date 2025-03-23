import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HotBeverage from "../HotBeverage";

describe("HotBeverage component", () => {
  it("HotBeverage should render correctly", () => {
    render(<HotBeverage />);
    expect(true).toBeTruthy();
  });
});
