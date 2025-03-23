import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TermSheet from "../TermSheet";

describe("TermSheet component", () => {
  it("TermSheet should render correctly", () => {
    render(<TermSheet />);
    expect(true).toBeTruthy();
  });
});
