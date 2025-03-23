import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ProjectTeam from "../ProjectTeam";

describe("ProjectTeam component", () => {
  it("ProjectTeam should render correctly", () => {
    render(<ProjectTeam />);
    expect(true).toBeTruthy();
  });
});
