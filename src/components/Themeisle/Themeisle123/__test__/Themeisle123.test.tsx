import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle123 from "../Themeisle123";

describe("Themeisle123 component", () => {
  it("Themeisle123 should render correctly", () => {
    render(<Themeisle123 />);
    expect(true).toBeTruthy();
  });
});
