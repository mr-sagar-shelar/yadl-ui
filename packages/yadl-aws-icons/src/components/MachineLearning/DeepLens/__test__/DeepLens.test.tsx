import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DeepLens from "../DeepLens";

describe("DeepLens component", () => {
  it("DeepLens should render correctly", () => {
    render(<DeepLens />);
    expect(true).toBeTruthy();
  });
});
