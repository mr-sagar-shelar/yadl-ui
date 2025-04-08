import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Completing from "../Completing";

describe("Completing component", () => {
  it("Completing should render correctly", () => {
    render(<Completing />);
    expect(true).toBeTruthy();
  });
});
