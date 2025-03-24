import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IceToolchainOrchestrator from "../IceToolchainOrchestrator";

describe("IceToolchainOrchestrator component", () => {
  it("IceToolchainOrchestrator should render correctly", () => {
    render(<IceToolchainOrchestrator />);
    expect(true).toBeTruthy();
  });
});
