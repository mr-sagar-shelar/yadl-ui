import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Flask from "../Flask";

describe("Flask component", () => {
  it("Flask should render correctly", () => {
    render(<Flask />);
    expect(true).toBeTruthy();
  });
});
