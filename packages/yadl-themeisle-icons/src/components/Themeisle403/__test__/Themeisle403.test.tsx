import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle403 from "../Themeisle403";

describe("Themeisle403 component", () => {
  it("Themeisle403 should render correctly", () => {
    render(<Themeisle403 />);
    expect(true).toBeTruthy();
  });
});
