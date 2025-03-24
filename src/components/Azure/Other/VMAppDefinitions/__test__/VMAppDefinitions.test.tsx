import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VMAppDefinitions from "../VMAppDefinitions";

describe("VMAppDefinitions component", () => {
  it("VMAppDefinitions should render correctly", () => {
    render(<VMAppDefinitions />);
    expect(true).toBeTruthy();
  });
});
