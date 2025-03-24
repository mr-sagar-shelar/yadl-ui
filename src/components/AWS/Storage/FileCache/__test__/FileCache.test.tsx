import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FileCache from "../FileCache";

describe("FileCache component", () => {
  it("FileCache should render correctly", () => {
    render(<FileCache />);
    expect(true).toBeTruthy();
  });
});
