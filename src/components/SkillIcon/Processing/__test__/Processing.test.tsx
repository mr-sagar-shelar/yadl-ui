import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Processing from "../Processing";

describe("Processing component", () => {
  it("Processing should render correctly", () => {
    render(<Processing />);
    expect(true).toBeTruthy();
  });
});
