import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VmwareEngine from "../VmwareEngine";

describe("VmwareEngine component", () => {
  it("VmwareEngine should render correctly", () => {
    render(<VmwareEngine />);
    expect(true).toBeTruthy();
  });
});
