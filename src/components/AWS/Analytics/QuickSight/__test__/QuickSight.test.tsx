import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import QuickSight from "../QuickSight";

describe("QuickSight component", () => {
  it("QuickSight should render correctly", () => {
    render(<QuickSight />);
    expect(true).toBeTruthy();
  });
});
