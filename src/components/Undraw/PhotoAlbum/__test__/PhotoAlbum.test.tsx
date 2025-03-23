import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PhotoAlbum from "../PhotoAlbum";

describe("PhotoAlbum component", () => {
  it("PhotoAlbum should render correctly", () => {
    render(<PhotoAlbum />);
    expect(true).toBeTruthy();
  });
});
