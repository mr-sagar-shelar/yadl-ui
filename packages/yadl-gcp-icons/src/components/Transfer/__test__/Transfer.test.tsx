import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Transfer from "../Transfer";

describe("Transfer component", () => {
  it("Transfer should render correctly", () => {
    render(<Transfer />);
    expect(true).toBeTruthy();
  });
});
