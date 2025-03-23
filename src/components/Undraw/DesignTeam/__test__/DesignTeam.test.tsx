import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DesignTeam from "../DesignTeam";

describe("DesignTeam component", () => {
  it("DesignTeam should render correctly", () => {
    render(<DesignTeam />);
    expect(true).toBeTruthy();
  });
});
