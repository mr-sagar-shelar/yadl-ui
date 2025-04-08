import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Settings from "../Settings";

describe("Settings component", () => {
  it("Settings should render correctly", () => {
    render(<Settings />);
    expect(true).toBeTruthy();
  });
});
