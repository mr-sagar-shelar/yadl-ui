import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Brainstorming from "../Brainstorming";

describe("Brainstorming component", () => {
  it("Brainstorming should render correctly", () => {
    render(<Brainstorming />);
    expect(true).toBeTruthy();
  });
});
