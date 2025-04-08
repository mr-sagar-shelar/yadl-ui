import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle2 from "../Themeisle2";

describe("Themeisle2 component", () => {
  it("Themeisle2 should render correctly", () => {
    render(<Themeisle2 />);
    expect(true).toBeTruthy();
  });
});
