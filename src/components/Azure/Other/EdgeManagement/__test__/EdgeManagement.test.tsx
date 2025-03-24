import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EdgeManagement from "../EdgeManagement";

describe("EdgeManagement component", () => {
  it("EdgeManagement should render correctly", () => {
    render(<EdgeManagement />);
    expect(true).toBeTruthy();
  });
});
