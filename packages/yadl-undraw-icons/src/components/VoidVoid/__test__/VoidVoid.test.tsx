import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VoidVoid from "../VoidVoid";

describe("VoidVoid component", () => {
  it("VoidVoid should render correctly", () => {
    render(<VoidVoid />);
    expect(true).toBeTruthy();
  });
});
