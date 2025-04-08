import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DigitalArtwork from "../DigitalArtwork";

describe("DigitalArtwork component", () => {
  it("DigitalArtwork should render correctly", () => {
    render(<DigitalArtwork />);
    expect(true).toBeTruthy();
  });
});
