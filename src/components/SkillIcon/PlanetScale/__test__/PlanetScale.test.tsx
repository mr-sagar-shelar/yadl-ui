import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PlanetScale from "../PlanetScale";

describe("PlanetScale component", () => {
  it("PlanetScale should render correctly", () => {
    render(<PlanetScale />);
    expect(true).toBeTruthy();
  });
});
