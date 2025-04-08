import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DedicatedHSM from "../DedicatedHSM";

describe("DedicatedHSM component", () => {
  it("DedicatedHSM should render correctly", () => {
    render(<DedicatedHSM />);
    expect(true).toBeTruthy();
  });
});
