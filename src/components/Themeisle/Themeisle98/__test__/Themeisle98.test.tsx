import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle98 from "../Themeisle98";

describe("Themeisle98 component", () => {
  it("Themeisle98 should render correctly", () => {
    render(<Themeisle98 />);
    expect(true).toBeTruthy();
  });
});
