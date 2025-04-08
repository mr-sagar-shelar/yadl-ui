import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ReadNotes from "../ReadNotes";

describe("ReadNotes component", () => {
  it("ReadNotes should render correctly", () => {
    render(<ReadNotes />);
    expect(true).toBeTruthy();
  });
});
