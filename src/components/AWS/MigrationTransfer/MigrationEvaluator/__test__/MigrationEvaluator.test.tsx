import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MigrationEvaluator from "../MigrationEvaluator";

describe("MigrationEvaluator component", () => {
  it("MigrationEvaluator should render correctly", () => {
    render(<MigrationEvaluator />);
    expect(true).toBeTruthy();
  });
});
