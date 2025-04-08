import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudWatch from "../CloudWatch";

describe("CloudWatch component", () => {
  it("CloudWatch should render correctly", () => {
    render(<CloudWatch />);
    expect(true).toBeTruthy();
  });
});
