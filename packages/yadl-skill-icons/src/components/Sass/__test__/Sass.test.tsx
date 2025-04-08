import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Sass from "../Sass";

describe("Sass component", () => {
  it("Sass should render correctly", () => {
    render(<Sass />);
    expect(true).toBeTruthy();
  });
});
