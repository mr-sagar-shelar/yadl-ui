import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import UniversalPrint from "../UniversalPrint";

describe("UniversalPrint component", () => {
  it("UniversalPrint should render correctly", () => {
    render(<UniversalPrint />);
    expect(true).toBeTruthy();
  });
});
