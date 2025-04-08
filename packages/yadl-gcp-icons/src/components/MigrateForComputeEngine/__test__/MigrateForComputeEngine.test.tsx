import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MigrateForComputeEngine from "../MigrateForComputeEngine";

describe("MigrateForComputeEngine component", () => {
  it("MigrateForComputeEngine should render correctly", () => {
    render(<MigrateForComputeEngine />);
    expect(true).toBeTruthy();
  });
});
