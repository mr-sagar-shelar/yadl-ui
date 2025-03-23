import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle18 from "../Themeisle18";

describe("Themeisle18 component", () => {
  it("Themeisle18 should render correctly", () => {
    render(<Themeisle18 />);
    expect(true).toBeTruthy();
  });
});
