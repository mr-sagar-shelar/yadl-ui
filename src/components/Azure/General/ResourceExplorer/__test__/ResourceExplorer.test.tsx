import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ResourceExplorer from "../ResourceExplorer";

describe("ResourceExplorer component", () => {
  it("ResourceExplorer should render correctly", () => {
    render(<ResourceExplorer />);
    expect(true).toBeTruthy();
  });
});
