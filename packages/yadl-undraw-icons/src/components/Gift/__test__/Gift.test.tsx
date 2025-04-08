import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Gift from "../Gift";

describe("Gift component", () => {
  it("Gift should render correctly", () => {
    render(<Gift />);
    expect(true).toBeTruthy();
  });
});
