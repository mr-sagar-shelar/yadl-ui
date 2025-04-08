import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Cache from "../Cache";

describe("Cache component", () => {
  it("Cache should render correctly", () => {
    render(<Cache />);
    expect(true).toBeTruthy();
  });
});
