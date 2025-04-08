import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Lex from "../Lex";

describe("Lex component", () => {
  it("Lex should render correctly", () => {
    render(<Lex />);
    expect(true).toBeTruthy();
  });
});
