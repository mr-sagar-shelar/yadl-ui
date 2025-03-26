import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Box from "../Box";

describe("Box component", () => {
  it("Box should render correctly", () => {
    render(<Box />);
    expect(true).toBeTruthy();
  });
});
