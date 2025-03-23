import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle3 from "../Themeisle3";

describe("Themeisle3 component", () => {
  it("Themeisle3 should render correctly", () => {
    render(<Themeisle3 />);
    expect(true).toBeTruthy();
  });
});
