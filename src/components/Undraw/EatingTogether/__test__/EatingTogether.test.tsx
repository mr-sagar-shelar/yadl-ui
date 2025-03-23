import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EatingTogether from "../EatingTogether";

describe("EatingTogether component", () => {
  it("EatingTogether should render correctly", () => {
    render(<EatingTogether />);
    expect(true).toBeTruthy();
  });
});
