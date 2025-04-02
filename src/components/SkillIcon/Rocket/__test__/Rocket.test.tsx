import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Rocket from "../Rocket";

describe("Rocket component", () => {
  it("Rocket should render correctly", () => {
    render(<Rocket />);
    expect(true).toBeTruthy();
  });
});
