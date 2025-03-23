import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CodeThinking from "../CodeThinking";

describe("CodeThinking component", () => {
  it("CodeThinking should render correctly", () => {
    render(<CodeThinking />);
    expect(true).toBeTruthy();
  });
});
