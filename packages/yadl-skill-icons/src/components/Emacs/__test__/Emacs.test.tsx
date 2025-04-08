import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Emacs from "../Emacs";

describe("Emacs component", () => {
  it("Emacs should render correctly", () => {
    render(<Emacs />);
    expect(true).toBeTruthy();
  });
});
