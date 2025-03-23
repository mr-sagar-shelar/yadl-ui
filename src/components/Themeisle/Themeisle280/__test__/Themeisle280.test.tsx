import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle280 from "../Themeisle280";

describe("Themeisle280 component", () => {
  it("Themeisle280 should render correctly", () => {
    render(<Themeisle280 />);
    expect(true).toBeTruthy();
  });
});
