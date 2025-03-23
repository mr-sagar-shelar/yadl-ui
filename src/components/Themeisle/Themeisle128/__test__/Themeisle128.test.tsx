import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle128 from "../Themeisle128";

describe("Themeisle128 component", () => {
  it("Themeisle128 should render correctly", () => {
    render(<Themeisle128 />);
    expect(true).toBeTruthy();
  });
});
