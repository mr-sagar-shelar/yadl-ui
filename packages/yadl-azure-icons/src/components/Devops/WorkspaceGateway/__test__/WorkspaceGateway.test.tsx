import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WorkspaceGateway from "../WorkspaceGateway";

describe("WorkspaceGateway component", () => {
  it("WorkspaceGateway should render correctly", () => {
    render(<WorkspaceGateway />);
    expect(true).toBeTruthy();
  });
});
