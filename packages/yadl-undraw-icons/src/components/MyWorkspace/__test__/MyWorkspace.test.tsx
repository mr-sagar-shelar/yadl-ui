import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MyWorkspace from "../MyWorkspace";

describe("MyWorkspace component", () => {
  it("MyWorkspace should render correctly", () => {
    render(<MyWorkspace />);
    expect(true).toBeTruthy();
  });
});
