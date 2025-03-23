import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MultipleChoice from "../MultipleChoice";

describe("MultipleChoice component", () => {
  it("MultipleChoice should render correctly", () => {
    render(<MultipleChoice />);
    expect(true).toBeTruthy();
  });
});
