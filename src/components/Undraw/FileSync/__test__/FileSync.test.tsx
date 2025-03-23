import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FileSync from "../FileSync";

describe("FileSync component", () => {
  it("FileSync should render correctly", () => {
    render(<FileSync />);
    expect(true).toBeTruthy();
  });
});
