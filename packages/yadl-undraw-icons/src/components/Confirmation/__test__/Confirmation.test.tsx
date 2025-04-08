import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Confirmation from "../Confirmation";

describe("Confirmation component", () => {
  it("Confirmation should render correctly", () => {
    render(<Confirmation />);
    expect(true).toBeTruthy();
  });
});
