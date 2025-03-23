import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TeamWorkTeamWork from "../TeamWorkTeamWork";

describe("TeamWorkTeamWork component", () => {
  it("TeamWorkTeamWork should render correctly", () => {
    render(<TeamWorkTeamWork />);
    expect(true).toBeTruthy();
  });
});
