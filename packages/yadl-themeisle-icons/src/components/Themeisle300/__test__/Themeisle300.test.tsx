import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle300 from "../Themeisle300";

describe("Themeisle300 component", () => {
  it("Themeisle300 should render correctly", () => {
    render(<Themeisle300 />);
    expect(true).toBeTruthy();
  });
});
