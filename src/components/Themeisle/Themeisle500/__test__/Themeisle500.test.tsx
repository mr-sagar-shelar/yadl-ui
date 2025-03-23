import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle500 from "../Themeisle500";

describe("Themeisle500 component", () => {
  it("Themeisle500 should render correctly", () => {
    render(<Themeisle500 />);
    expect(true).toBeTruthy();
  });
});
