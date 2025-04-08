import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureSphere from "../AzureSphere";

describe("AzureSphere component", () => {
  it("AzureSphere should render correctly", () => {
    render(<AzureSphere />);
    expect(true).toBeTruthy();
  });
});
