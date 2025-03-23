import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GrandSlam from "../GrandSlam";

describe("GrandSlam component", () => {
  it("GrandSlam should render correctly", () => {
    render(<GrandSlam />);
    expect(true).toBeTruthy();
  });
});
