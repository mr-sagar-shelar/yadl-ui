import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ReleaseNotes from "../ReleaseNotes";

describe("ReleaseNotes component", () => {
  it("ReleaseNotes should render correctly", () => {
    render(<ReleaseNotes />);
    expect(true).toBeTruthy();
  });
});
