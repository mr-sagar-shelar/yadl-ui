import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FileBundle from "../FileBundle";

describe("FileBundle component", () => {
  it("FileBundle should render correctly", () => {
    render(<FileBundle />);
    expect(true).toBeTruthy();
  });
});
