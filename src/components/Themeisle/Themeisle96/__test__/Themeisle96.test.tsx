import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle96 from "../Themeisle96";

describe("Themeisle96 component", () => {
  it("Themeisle96 should render correctly", () => {
    render(<Themeisle96 />);
    expect(true).toBeTruthy();
  });
});
