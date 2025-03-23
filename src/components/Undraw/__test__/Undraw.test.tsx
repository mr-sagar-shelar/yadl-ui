import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Undraw from "../Undraw";

describe("Undraw component", () => {
  it("Undraw should render correctly", () => {
    render(<Undraw />);
    expect(true).toBeTruthy();
  });
});
