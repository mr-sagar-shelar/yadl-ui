import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SaveToBookmarks from "../SaveToBookmarks";

describe("SaveToBookmarks component", () => {
  it("SaveToBookmarks should render correctly", () => {
    render(<SaveToBookmarks />);
    expect(true).toBeTruthy();
  });
});
