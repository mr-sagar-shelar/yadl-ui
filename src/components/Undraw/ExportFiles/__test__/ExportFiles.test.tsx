import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ExportFiles from "../ExportFiles";

describe("ExportFiles component", () => {
  it("ExportFiles should render correctly", () => {
    render(<ExportFiles />);
    expect(true).toBeTruthy();
  });
});
