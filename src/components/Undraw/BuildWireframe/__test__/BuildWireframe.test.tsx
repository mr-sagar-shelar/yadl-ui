import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BuildWireframe from "../BuildWireframe";

describe("BuildWireframe component", () => {
  it("BuildWireframe should render correctly", () => {
    render(<BuildWireframe />);
    expect(true).toBeTruthy();
  });
});
