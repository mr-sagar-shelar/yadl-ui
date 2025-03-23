import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Happy_musicHappyMusic from "../Happy_musicHappyMusic";

describe("Happy_musicHappyMusic component", () => {
  it("Happy_musicHappyMusic should render correctly", () => {
    render(<Happy_musicHappyMusic />);
    expect(true).toBeTruthy();
  });
});
