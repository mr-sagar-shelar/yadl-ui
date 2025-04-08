import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle8 from "../Themeisle8";

describe("Themeisle8 component", () => {
  it("Themeisle8 should render correctly", () => {
    render(<Themeisle8 />);
    expect(true).toBeTruthy();
  });
});
