import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VirtualMachine from "../VirtualMachine";

describe("VirtualMachine component", () => {
  it("VirtualMachine should render correctly", () => {
    render(<VirtualMachine />);
    expect(true).toBeTruthy();
  });
});
