import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Private5G from "../Private5G";

describe("Private5G component", () => {
  it("Private5G should render correctly", () => {
    render(<Private5G />);
    expect(true).toBeTruthy();
  });
});
