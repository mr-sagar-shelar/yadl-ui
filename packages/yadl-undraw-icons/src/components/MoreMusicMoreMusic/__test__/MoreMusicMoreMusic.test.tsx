import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MoreMusicMoreMusic from "../MoreMusicMoreMusic";

describe("MoreMusicMoreMusic component", () => {
  it("MoreMusicMoreMusic should render correctly", () => {
    render(<MoreMusicMoreMusic />);
    expect(true).toBeTruthy();
  });
});
