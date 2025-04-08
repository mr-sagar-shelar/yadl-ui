import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle180 from "../Themeisle180";

describe("Themeisle180 component", () => {
  it("Themeisle180 should render correctly", () => {
    render(<Themeisle180 />);
    expect(true).toBeTruthy();
  });
});
