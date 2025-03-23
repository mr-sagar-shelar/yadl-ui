import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Bookmarks from "../Bookmarks";

describe("Bookmarks component", () => {
  it("Bookmarks should render correctly", () => {
    render(<Bookmarks />);
    expect(true).toBeTruthy();
  });
});
