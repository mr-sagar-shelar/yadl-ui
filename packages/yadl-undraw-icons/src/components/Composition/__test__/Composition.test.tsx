import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Composition from "../Composition";

describe("Composition component", () => {
  it("Composition should render correctly", () => {
    render(<Composition />);
    expect(true).toBeTruthy();
  });
});
