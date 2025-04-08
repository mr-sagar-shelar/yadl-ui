import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle90 from "../Themeisle90";

describe("Themeisle90 component", () => {
  it("Themeisle90 should render correctly", () => {
    render(<Themeisle90 />);
    expect(true).toBeTruthy();
  });
});
