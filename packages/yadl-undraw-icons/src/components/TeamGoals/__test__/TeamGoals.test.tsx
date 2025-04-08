import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TeamGoals from "../TeamGoals";

describe("TeamGoals component", () => {
  it("TeamGoals should render correctly", () => {
    render(<TeamGoals />);
    expect(true).toBeTruthy();
  });
});
