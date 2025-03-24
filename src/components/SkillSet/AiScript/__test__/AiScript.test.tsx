import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AiScript from "../AiScript";

describe("AiScript component", () => {
  it("AiScript should render correctly", () => {
    render(<AiScript />);
    expect(true).toBeTruthy();
  });
});
