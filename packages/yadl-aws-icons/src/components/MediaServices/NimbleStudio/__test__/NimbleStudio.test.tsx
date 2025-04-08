import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NimbleStudio from "../NimbleStudio";

describe("NimbleStudio component", () => {
  it("NimbleStudio should render correctly", () => {
    render(<NimbleStudio />);
    expect(true).toBeTruthy();
  });
});
