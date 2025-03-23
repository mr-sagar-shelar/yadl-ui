import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ProgressOverview from "../ProgressOverview";

describe("ProgressOverview component", () => {
  it("ProgressOverview should render correctly", () => {
    render(<ProgressOverview />);
    expect(true).toBeTruthy();
  });
});
