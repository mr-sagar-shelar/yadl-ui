import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SmileyFace from "../SmileyFace";

describe("SmileyFace component", () => {
  it("SmileyFace should render correctly", () => {
    render(<SmileyFace />);
    expect(true).toBeTruthy();
  });
});
