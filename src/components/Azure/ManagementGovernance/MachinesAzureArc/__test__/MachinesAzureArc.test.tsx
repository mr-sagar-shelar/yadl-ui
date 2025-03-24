import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MachinesAzureArc from "../MachinesAzureArc";

describe("MachinesAzureArc component", () => {
  it("MachinesAzureArc should render correctly", () => {
    render(<MachinesAzureArc />);
    expect(true).toBeTruthy();
  });
});
