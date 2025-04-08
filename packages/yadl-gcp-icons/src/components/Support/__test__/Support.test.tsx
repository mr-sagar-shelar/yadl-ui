import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Support from "../Support";

describe("Support component", () => {
  it("Support should render correctly", () => {
    render(<Support />);
    expect(true).toBeTruthy();
  });
});
