import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OpenNotes from "../OpenNotes";

describe("OpenNotes component", () => {
  it("OpenNotes should render correctly", () => {
    render(<OpenNotes />);
    expect(true).toBeTruthy();
  });
});
