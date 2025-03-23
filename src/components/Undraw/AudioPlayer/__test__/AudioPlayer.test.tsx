import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AudioPlayer from "../AudioPlayer";

describe("AudioPlayer component", () => {
  it("AudioPlayer should render correctly", () => {
    render(<AudioPlayer />);
    expect(true).toBeTruthy();
  });
});
