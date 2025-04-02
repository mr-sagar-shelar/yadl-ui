import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Vala from "../Vala";

describe("Vala component", () => {
  it("Vala should render correctly", () => {
    render(<Vala />);
    expect(true).toBeTruthy();
  });
});
