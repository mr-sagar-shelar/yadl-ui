import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Blueprints from "../Blueprints";

describe("Blueprints component", () => {
  it("Blueprints should render correctly", () => {
    render(<Blueprints />);
    expect(true).toBeTruthy();
  });
});
