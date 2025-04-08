import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TextField from "../TextField";

describe("TextField component", () => {
  it("TextField should render correctly", () => {
    render(<TextField />);
    expect(true).toBeTruthy();
  });
});
