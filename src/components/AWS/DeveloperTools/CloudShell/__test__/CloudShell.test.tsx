import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudShell from "../CloudShell";

describe("CloudShell component", () => {
  it("CloudShell should render correctly", () => {
    render(<CloudShell />);
    expect(true).toBeTruthy();
  });
});
