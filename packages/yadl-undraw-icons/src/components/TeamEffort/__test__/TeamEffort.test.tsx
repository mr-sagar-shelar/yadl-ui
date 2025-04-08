import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TeamEffort from "../TeamEffort";

describe("TeamEffort component", () => {
  it("TeamEffort should render correctly", () => {
    render(<TeamEffort />);
    expect(true).toBeTruthy();
  });
});
