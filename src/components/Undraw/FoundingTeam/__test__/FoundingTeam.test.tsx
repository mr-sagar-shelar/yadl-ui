import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FoundingTeam from "../FoundingTeam";

describe("FoundingTeam component", () => {
  it("FoundingTeam should render correctly", () => {
    render(<FoundingTeam />);
    expect(true).toBeTruthy();
  });
});
