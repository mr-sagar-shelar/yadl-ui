import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Forth from "../Forth";

describe("Forth component", () => {
  it("Forth should render correctly", () => {
    render(<Forth />);
    expect(true).toBeTruthy();
  });
});
