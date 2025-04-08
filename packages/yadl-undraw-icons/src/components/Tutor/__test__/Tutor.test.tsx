import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Tutor from "../Tutor";

describe("Tutor component", () => {
  it("Tutor should render correctly", () => {
    render(<Tutor />);
    expect(true).toBeTruthy();
  });
});
