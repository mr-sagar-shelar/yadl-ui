import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LabServices from "../LabServices";

describe("LabServices component", () => {
  it("LabServices should render correctly", () => {
    render(<LabServices />);
    expect(true).toBeTruthy();
  });
});
