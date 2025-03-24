import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Commit from "../Commit";

describe("Commit component", () => {
  it("Commit should render correctly", () => {
    render(<Commit />);
    expect(true).toBeTruthy();
  });
});
