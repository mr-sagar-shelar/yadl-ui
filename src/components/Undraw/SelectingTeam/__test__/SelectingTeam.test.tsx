import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SelectingTeam from "../SelectingTeam";

describe("SelectingTeam component", () => {
  it("SelectingTeam should render correctly", () => {
    render(<SelectingTeam />);
    expect(true).toBeTruthy();
  });
});
