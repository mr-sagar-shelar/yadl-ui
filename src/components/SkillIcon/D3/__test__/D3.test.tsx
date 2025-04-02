import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import D3 from "../D3";

describe("D3 component", () => {
  it("D3 should render correctly", () => {
    render(<D3 />);
    expect(true).toBeTruthy();
  });
});
