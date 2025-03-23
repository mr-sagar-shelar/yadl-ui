import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle20 from "../Themeisle20";

describe("Themeisle20 component", () => {
  it("Themeisle20 should render correctly", () => {
    render(<Themeisle20 />);
    expect(true).toBeTruthy();
  });
});
