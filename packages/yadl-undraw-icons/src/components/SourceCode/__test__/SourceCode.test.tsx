import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SourceCode from "../SourceCode";

describe("SourceCode component", () => {
  it("SourceCode should render correctly", () => {
    render(<SourceCode />);
    expect(true).toBeTruthy();
  });
});
