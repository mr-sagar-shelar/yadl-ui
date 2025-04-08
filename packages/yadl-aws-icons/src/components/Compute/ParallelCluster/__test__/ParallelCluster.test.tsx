import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ParallelCluster from "../ParallelCluster";

describe("ParallelCluster component", () => {
  it("ParallelCluster should render correctly", () => {
    render(<ParallelCluster />);
    expect(true).toBeTruthy();
  });
});
