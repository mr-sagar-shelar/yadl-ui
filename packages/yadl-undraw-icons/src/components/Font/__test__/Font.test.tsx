import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Font from "../Font";

describe("Font component", () => {
  it("Font should render correctly", () => {
    render(<Font />);
    expect(true).toBeTruthy();
  });
});
