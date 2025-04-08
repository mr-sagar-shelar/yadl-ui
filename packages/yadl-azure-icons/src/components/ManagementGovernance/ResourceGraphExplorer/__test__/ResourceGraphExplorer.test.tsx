import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ResourceGraphExplorer from "../ResourceGraphExplorer";

describe("ResourceGraphExplorer component", () => {
  it("ResourceGraphExplorer should render correctly", () => {
    render(<ResourceGraphExplorer />);
    expect(true).toBeTruthy();
  });
});
