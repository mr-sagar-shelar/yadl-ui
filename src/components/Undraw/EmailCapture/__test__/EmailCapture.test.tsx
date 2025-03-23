import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EmailCapture from "../EmailCapture";

describe("EmailCapture component", () => {
  it("EmailCapture should render correctly", () => {
    render(<EmailCapture />);
    expect(true).toBeTruthy();
  });
});
