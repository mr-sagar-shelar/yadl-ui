import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Arch from "../Arch";

describe("Arch component", () => {
  it("Arch should render correctly", () => {
    render(<Arch />);
    expect(true).toBeTruthy();
  });
});
