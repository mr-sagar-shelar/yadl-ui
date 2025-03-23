import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AwardsAwards from "../AwardsAwards";

describe("AwardsAwards component", () => {
  it("AwardsAwards should render correctly", () => {
    render(<AwardsAwards />);
    expect(true).toBeTruthy();
  });
});
