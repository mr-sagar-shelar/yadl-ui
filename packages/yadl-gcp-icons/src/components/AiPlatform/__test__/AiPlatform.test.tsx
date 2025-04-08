import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AiPlatform from "../AiPlatform";

describe("AiPlatform component", () => {
  it("AiPlatform should render correctly", () => {
    render(<AiPlatform />);
    expect(true).toBeTruthy();
  });
});
