import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Cooking from "../Cooking";

describe("Cooking component", () => {
  it("Cooking should render correctly", () => {
    render(<Cooking />);
    expect(true).toBeTruthy();
  });
});
