import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle1 from "../Themeisle1";

describe("Themeisle1 component", () => {
  it("Themeisle1 should render correctly", () => {
    render(<Themeisle1 />);
    expect(true).toBeTruthy();
  });
});
