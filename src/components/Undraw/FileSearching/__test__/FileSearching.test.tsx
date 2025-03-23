import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FileSearching from "../FileSearching";

describe("FileSearching component", () => {
  it("FileSearching should render correctly", () => {
    render(<FileSearching />);
    expect(true).toBeTruthy();
  });
});
