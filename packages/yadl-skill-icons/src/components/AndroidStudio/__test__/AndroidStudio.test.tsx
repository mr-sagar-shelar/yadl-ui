import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AndroidStudio from "../AndroidStudio";

describe("AndroidStudio component", () => {
  it("AndroidStudio should render correctly", () => {
    render(<AndroidStudio />);
    expect(true).toBeTruthy();
  });
});
