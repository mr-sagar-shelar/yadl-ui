import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import InfrastructureBackup from "../InfrastructureBackup";

describe("InfrastructureBackup component", () => {
  it("InfrastructureBackup should render correctly", () => {
    render(<InfrastructureBackup />);
    expect(true).toBeTruthy();
  });
});
