import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudHSM from "../CloudHSM";

describe("CloudHSM component", () => {
  it("CloudHSM should render correctly", () => {
    render(<CloudHSM />);
    expect(true).toBeTruthy();
  });
});
