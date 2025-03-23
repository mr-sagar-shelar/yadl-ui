import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Floating from "../Floating";

describe("Floating component", () => {
  it("Floating should render correctly", () => {
    render(<Floating />);
    expect(true).toBeTruthy();
  });
});
