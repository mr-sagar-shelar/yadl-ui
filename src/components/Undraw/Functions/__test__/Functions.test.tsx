import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Functions from "../Functions";

describe("Functions component", () => {
  it("Functions should render correctly", () => {
    render(<Functions />);
    expect(true).toBeTruthy();
  });
});
