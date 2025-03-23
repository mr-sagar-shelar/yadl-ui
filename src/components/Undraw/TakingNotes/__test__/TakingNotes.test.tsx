import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TakingNotes from "../TakingNotes";

describe("TakingNotes component", () => {
  it("TakingNotes should render correctly", () => {
    render(<TakingNotes />);
    expect(true).toBeTruthy();
  });
});
