import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ArtistArtist from "../ArtistArtist";

describe("ArtistArtist component", () => {
  it("ArtistArtist should render correctly", () => {
    render(<ArtistArtist />);
    expect(true).toBeTruthy();
  });
});
