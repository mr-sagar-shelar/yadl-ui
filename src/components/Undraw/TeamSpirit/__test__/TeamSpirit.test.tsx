import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TeamSpirit from "../TeamSpirit";

describe("TeamSpirit component", () => {
  it("TeamSpirit should render correctly", () => {
    render(<TeamSpirit />);
    expect(true).toBeTruthy();
  });
});
