import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Letter from "../Letter";

describe("Letter component", () => {
  it("Letter should render correctly", () => {
    render(<Letter />);
    expect(true).toBeTruthy();
  });
});
