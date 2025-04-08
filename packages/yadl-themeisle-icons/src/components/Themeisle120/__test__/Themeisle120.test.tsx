import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle120 from "../Themeisle120";

describe("Themeisle120 component", () => {
  it("Themeisle120 should render correctly", () => {
    render(<Themeisle120 />);
    expect(true).toBeTruthy();
  });
});
