import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Creativity from "../Creativity";

describe("Creativity component", () => {
  it("Creativity should render correctly", () => {
    render(<Creativity />);
    expect(true).toBeTruthy();
  });
});
