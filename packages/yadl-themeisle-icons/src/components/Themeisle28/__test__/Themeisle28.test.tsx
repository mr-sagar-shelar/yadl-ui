import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle28 from "../Themeisle28";

describe("Themeisle28 component", () => {
  it("Themeisle28 should render correctly", () => {
    render(<Themeisle28 />);
    expect(true).toBeTruthy();
  });
});
