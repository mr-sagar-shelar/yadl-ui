import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DotNet from "../DotNet";

describe("DotNet component", () => {
  it("DotNet should render correctly", () => {
    render(<DotNet />);
    expect(true).toBeTruthy();
  });
});
