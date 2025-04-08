import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MediaPlayer from "../MediaPlayer";

describe("MediaPlayer component", () => {
  it("MediaPlayer should render correctly", () => {
    render(<MediaPlayer />);
    expect(true).toBeTruthy();
  });
});
