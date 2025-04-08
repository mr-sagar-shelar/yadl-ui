import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle270 from "../Themeisle270";

describe("Themeisle270 component", () => {
  it("Themeisle270 should render correctly", () => {
    render(<Themeisle270 />);
    expect(true).toBeTruthy();
  });
});
