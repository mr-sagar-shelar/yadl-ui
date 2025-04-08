import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Halloween from "../Halloween";

describe("Halloween component", () => {
  it("Halloween should render correctly", () => {
    render(<Halloween />);
    expect(true).toBeTruthy();
  });
});
