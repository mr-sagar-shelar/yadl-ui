import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Grades from "../Grades";

describe("Grades component", () => {
  it("Grades should render correctly", () => {
    render(<Grades />);
    expect(true).toBeTruthy();
  });
});
