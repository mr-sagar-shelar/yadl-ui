import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle80 from "../Themeisle80";

describe("Themeisle80 component", () => {
  it("Themeisle80 should render correctly", () => {
    render(<Themeisle80 />);
    expect(true).toBeTruthy();
  });
});
