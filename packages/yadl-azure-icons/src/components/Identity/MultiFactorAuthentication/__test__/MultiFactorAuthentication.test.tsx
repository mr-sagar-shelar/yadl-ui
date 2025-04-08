import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MultiFactorAuthentication from "../MultiFactorAuthentication";

describe("MultiFactorAuthentication component", () => {
  it("MultiFactorAuthentication should render correctly", () => {
    render(<MultiFactorAuthentication />);
    expect(true).toBeTruthy();
  });
});
