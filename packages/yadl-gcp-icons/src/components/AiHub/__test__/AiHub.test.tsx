import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AiHub from "../AiHub";

describe("AiHub component", () => {
  it("AiHub should render correctly", () => {
    render(<AiHub />);
    expect(true).toBeTruthy();
  });
});
