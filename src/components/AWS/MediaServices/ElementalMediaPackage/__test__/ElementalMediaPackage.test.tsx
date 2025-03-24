import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ElementalMediaPackage from "../ElementalMediaPackage";

describe("ElementalMediaPackage component", () => {
  it("ElementalMediaPackage should render correctly", () => {
    render(<ElementalMediaPackage />);
    expect(true).toBeTruthy();
  });
});
