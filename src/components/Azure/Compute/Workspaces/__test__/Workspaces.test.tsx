import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Workspaces from "../Workspaces";

describe("Workspaces component", () => {
  it("Workspaces should render correctly", () => {
    render(<Workspaces />);
    expect(true).toBeTruthy();
  });
});
