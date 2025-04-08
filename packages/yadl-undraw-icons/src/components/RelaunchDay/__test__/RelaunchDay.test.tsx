import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RelaunchDay from "../RelaunchDay";

describe("RelaunchDay component", () => {
  it("RelaunchDay should render correctly", () => {
    render(<RelaunchDay />);
    expect(true).toBeTruthy();
  });
});
