import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle365 from "../Themeisle365";

describe("Themeisle365 component", () => {
  it("Themeisle365 should render correctly", () => {
    render(<Themeisle365 />);
    expect(true).toBeTruthy();
  });
});
