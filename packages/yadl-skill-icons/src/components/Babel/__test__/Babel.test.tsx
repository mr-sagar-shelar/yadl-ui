import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Babel from "../Babel";

describe("Babel component", () => {
  it("Babel should render correctly", () => {
    render(<Babel />);
    expect(true).toBeTruthy();
  });
});
