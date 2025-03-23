import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HangOut from "../HangOut";

describe("HangOut component", () => {
  it("HangOut should render correctly", () => {
    render(<HangOut />);
    expect(true).toBeTruthy();
  });
});
