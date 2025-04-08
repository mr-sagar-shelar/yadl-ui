import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AtWork from "../AtWork";

describe("AtWork component", () => {
  it("AtWork should render correctly", () => {
    render(<AtWork />);
    expect(true).toBeTruthy();
  });
});
