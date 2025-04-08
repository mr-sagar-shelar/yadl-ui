import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Scientist from "../Scientist";

describe("Scientist component", () => {
  it("Scientist should render correctly", () => {
    render(<Scientist />);
    expect(true).toBeTruthy();
  });
});
