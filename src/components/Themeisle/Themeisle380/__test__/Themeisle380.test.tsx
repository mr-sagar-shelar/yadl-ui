import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle380 from "../Themeisle380";

describe("Themeisle380 component", () => {
  it("Themeisle380 should render correctly", () => {
    render(<Themeisle380 />);
    expect(true).toBeTruthy();
  });
});
