import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle404 from "../Themeisle404";

describe("Themeisle404 component", () => {
  it("Themeisle404 should render correctly", () => {
    render(<Themeisle404 />);
    expect(true).toBeTruthy();
  });
});
