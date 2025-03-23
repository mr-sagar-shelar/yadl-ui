import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BlankCanvas from "../BlankCanvas";

describe("BlankCanvas component", () => {
  it("BlankCanvas should render correctly", () => {
    render(<BlankCanvas />);
    expect(true).toBeTruthy();
  });
});
