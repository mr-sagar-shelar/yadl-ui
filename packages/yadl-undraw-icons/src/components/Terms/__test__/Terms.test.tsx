import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Terms from "../Terms";

describe("Terms component", () => {
  it("Terms should render correctly", () => {
    render(<Terms />);
    expect(true).toBeTruthy();
  });
});
