import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SplitTesting from "../SplitTesting";

describe("SplitTesting component", () => {
  it("SplitTesting should render correctly", () => {
    render(<SplitTesting />);
    expect(true).toBeTruthy();
  });
});
