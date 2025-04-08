import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Hamburger from "../Hamburger";

describe("Hamburger component", () => {
  it("Hamburger should render correctly", () => {
    render(<Hamburger />);
    expect(true).toBeTruthy();
  });
});
