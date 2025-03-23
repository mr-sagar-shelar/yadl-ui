import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle36 from "../Themeisle36";

describe("Themeisle36 component", () => {
  it("Themeisle36 should render correctly", () => {
    render(<Themeisle36 />);
    expect(true).toBeTruthy();
  });
});
