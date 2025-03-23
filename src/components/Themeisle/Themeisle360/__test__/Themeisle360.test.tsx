import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle360 from "../Themeisle360";

describe("Themeisle360 component", () => {
  it("Themeisle360 should render correctly", () => {
    render(<Themeisle360 />);
    expect(true).toBeTruthy();
  });
});
