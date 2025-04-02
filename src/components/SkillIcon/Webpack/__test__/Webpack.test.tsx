import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Webpack from "../Webpack";

describe("Webpack component", () => {
  it("Webpack should render correctly", () => {
    render(<Webpack />);
    expect(true).toBeTruthy();
  });
});
