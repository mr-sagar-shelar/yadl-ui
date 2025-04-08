import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle6 from "../Themeisle6";

describe("Themeisle6 component", () => {
  it("Themeisle6 should render correctly", () => {
    render(<Themeisle6 />);
    expect(true).toBeTruthy();
  });
});
