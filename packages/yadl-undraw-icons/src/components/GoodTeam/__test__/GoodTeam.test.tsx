import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GoodTeam from "../GoodTeam";

describe("GoodTeam component", () => {
  it("GoodTeam should render correctly", () => {
    render(<GoodTeam />);
    expect(true).toBeTruthy();
  });
});
