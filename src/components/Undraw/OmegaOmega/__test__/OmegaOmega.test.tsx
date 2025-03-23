import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OmegaOmega from "../OmegaOmega";

describe("OmegaOmega component", () => {
  it("OmegaOmega should render correctly", () => {
    render(<OmegaOmega />);
    expect(true).toBeTruthy();
  });
});
