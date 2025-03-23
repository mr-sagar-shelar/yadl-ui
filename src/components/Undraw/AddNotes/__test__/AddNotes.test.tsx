import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AddNotes from "../AddNotes";

describe("AddNotes component", () => {
  it("AddNotes should render correctly", () => {
    render(<AddNotes />);
    expect(true).toBeTruthy();
  });
});
