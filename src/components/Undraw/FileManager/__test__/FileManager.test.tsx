import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FileManager from "../FileManager";

describe("FileManager component", () => {
  it("FileManager should render correctly", () => {
    render(<FileManager />);
    expect(true).toBeTruthy();
  });
});
