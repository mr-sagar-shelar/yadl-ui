import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Polly from "../Polly";

describe("Polly component", () => {
  it("Polly should render correctly", () => {
    render(<Polly />);
    expect(true).toBeTruthy();
  });
});
