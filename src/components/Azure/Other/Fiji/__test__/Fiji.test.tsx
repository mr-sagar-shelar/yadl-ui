import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Fiji from "../Fiji";

describe("Fiji component", () => {
  it("Fiji should render correctly", () => {
    render(<Fiji />);
    expect(true).toBeTruthy();
  });
});
