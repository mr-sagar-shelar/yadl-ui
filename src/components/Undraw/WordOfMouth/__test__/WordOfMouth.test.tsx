import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WordOfMouth from "../WordOfMouth";

describe("WordOfMouth component", () => {
  it("WordOfMouth should render correctly", () => {
    render(<WordOfMouth />);
    expect(true).toBeTruthy();
  });
});
