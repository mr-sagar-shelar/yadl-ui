import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NoteList from "../NoteList";

describe("NoteList component", () => {
  it("NoteList should render correctly", () => {
    render(<NoteList />);
    expect(true).toBeTruthy();
  });
});
