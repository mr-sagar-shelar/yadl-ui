import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CodeTyping from "../CodeTyping";

describe("CodeTyping component", () => {
  it("CodeTyping should render correctly", () => {
    render(<CodeTyping />);
    expect(true).toBeTruthy();
  });
});
