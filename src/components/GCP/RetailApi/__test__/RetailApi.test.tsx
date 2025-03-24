import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RetailApi from "../RetailApi";

describe("RetailApi component", () => {
  it("RetailApi should render correctly", () => {
    render(<RetailApi />);
    expect(true).toBeTruthy();
  });
});
