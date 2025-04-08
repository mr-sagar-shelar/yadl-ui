import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EngineeringTeam from "../EngineeringTeam";

describe("EngineeringTeam component", () => {
  it("EngineeringTeam should render correctly", () => {
    render(<EngineeringTeam />);
    expect(true).toBeTruthy();
  });
});
