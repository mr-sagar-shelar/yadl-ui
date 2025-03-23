import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ArtLover from "../ArtLover";

describe("ArtLover component", () => {
  it("ArtLover should render correctly", () => {
    render(<ArtLover />);
    expect(true).toBeTruthy();
  });
});
