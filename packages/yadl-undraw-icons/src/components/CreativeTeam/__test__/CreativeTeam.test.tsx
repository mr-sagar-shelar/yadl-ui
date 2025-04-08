import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CreativeTeam from "../CreativeTeam";

describe("CreativeTeam component", () => {
  it("CreativeTeam should render correctly", () => {
    render(<CreativeTeam />);
    expect(true).toBeTruthy();
  });
});
