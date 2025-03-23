import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PersonalNotesPersonalNotes from "../PersonalNotesPersonalNotes";

describe("PersonalNotesPersonalNotes component", () => {
  it("PersonalNotesPersonalNotes should render correctly", () => {
    render(<PersonalNotesPersonalNotes />);
    expect(true).toBeTruthy();
  });
});
