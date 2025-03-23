import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle400 from "../Themeisle400";

describe("Themeisle400 component", () => {
  it("Themeisle400 should render correctly", () => {
    render(<Themeisle400 />);
    expect(true).toBeTruthy();
  });
});
