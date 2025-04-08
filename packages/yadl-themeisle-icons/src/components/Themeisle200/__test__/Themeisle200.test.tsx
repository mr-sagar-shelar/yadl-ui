import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle200 from "../Themeisle200";

describe("Themeisle200 component", () => {
  it("Themeisle200 should render correctly", () => {
    render(<Themeisle200 />);
    expect(true).toBeTruthy();
  });
});
