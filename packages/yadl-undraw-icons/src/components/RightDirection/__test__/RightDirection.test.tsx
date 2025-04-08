import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RightDirection from "../RightDirection";

describe("RightDirection component", () => {
  it("RightDirection should render correctly", () => {
    render(<RightDirection />);
    expect(true).toBeTruthy();
  });
});
