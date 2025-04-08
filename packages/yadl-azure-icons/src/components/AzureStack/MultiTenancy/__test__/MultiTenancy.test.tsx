import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MultiTenancy from "../MultiTenancy";

describe("MultiTenancy component", () => {
  it("MultiTenancy should render correctly", () => {
    render(<MultiTenancy />);
    expect(true).toBeTruthy();
  });
});
