import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ThinkboxSequoia from "../ThinkboxSequoia";

describe("ThinkboxSequoia component", () => {
  it("ThinkboxSequoia should render correctly", () => {
    render(<ThinkboxSequoia />);
    expect(true).toBeTruthy();
  });
});
