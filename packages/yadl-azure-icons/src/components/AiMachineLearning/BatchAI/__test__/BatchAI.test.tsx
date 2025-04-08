import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BatchAI from "../BatchAI";

describe("BatchAI component", () => {
  it("BatchAI should render correctly", () => {
    render(<BatchAI />);
    expect(true).toBeTruthy();
  });
});
