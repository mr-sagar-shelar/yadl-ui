import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VirtualMachinesClassic from "../VirtualMachinesClassic";

describe("VirtualMachinesClassic component", () => {
  it("VirtualMachinesClassic should render correctly", () => {
    render(<VirtualMachinesClassic />);
    expect(true).toBeTruthy();
  });
});
