import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle100 from "../Themeisle100";

describe("Themeisle100 component", () => {
  it("Themeisle100 should render correctly", () => {
    render(<Themeisle100 />);
    expect(true).toBeTruthy();
  });
});
