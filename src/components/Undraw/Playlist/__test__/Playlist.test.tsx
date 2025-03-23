import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Playlist from "../Playlist";

describe("Playlist component", () => {
  it("Playlist should render correctly", () => {
    render(<Playlist />);
    expect(true).toBeTruthy();
  });
});
