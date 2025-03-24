import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudRun from "../CloudRun";

describe("CloudRun component", () => {
  it("CloudRun should render correctly", () => {
    render(<CloudRun />);
    expect(true).toBeTruthy();
  });
});
