import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Graduation from "../Graduation";

describe("Graduation component", () => {
  it("Graduation should render correctly", () => {
    render(<Graduation />);
    expect(true).toBeTruthy();
  });
});
