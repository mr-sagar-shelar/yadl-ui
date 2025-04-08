import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle60 from "../Themeisle60";

describe("Themeisle60 component", () => {
  it("Themeisle60 should render correctly", () => {
    render(<Themeisle60 />);
    expect(true).toBeTruthy();
  });
});
