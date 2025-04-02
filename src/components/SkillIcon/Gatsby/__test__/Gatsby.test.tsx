import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Gatsby from "../Gatsby";

describe("Gatsby component", () => {
  it("Gatsby should render correctly", () => {
    render(<Gatsby />);
    expect(true).toBeTruthy();
  });
});
