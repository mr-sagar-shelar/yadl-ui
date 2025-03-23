import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle30 from "../Themeisle30";

describe("Themeisle30 component", () => {
  it("Themeisle30 should render correctly", () => {
    render(<Themeisle30 />);
    expect(true).toBeTruthy();
  });
});
