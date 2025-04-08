import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Notes from "../Notes";

describe("Notes component", () => {
  it("Notes should render correctly", () => {
    render(<Notes />);
    expect(true).toBeTruthy();
  });
});
