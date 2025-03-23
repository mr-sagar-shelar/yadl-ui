import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Farming from "../Farming";

describe("Farming component", () => {
  it("Farming should render correctly", () => {
    render(<Farming />);
    expect(true).toBeTruthy();
  });
});
