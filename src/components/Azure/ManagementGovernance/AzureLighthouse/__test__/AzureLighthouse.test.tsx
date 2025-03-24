import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureLighthouse from "../AzureLighthouse";

describe("AzureLighthouse component", () => {
  it("AzureLighthouse should render correctly", () => {
    render(<AzureLighthouse />);
    expect(true).toBeTruthy();
  });
});
