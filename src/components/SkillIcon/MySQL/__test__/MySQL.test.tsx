import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MySQL from "../MySQL";

describe("MySQL component", () => {
  it("MySQL should render correctly", () => {
    render(<MySQL />);
    expect(true).toBeTruthy();
  });
});
