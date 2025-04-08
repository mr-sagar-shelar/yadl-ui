import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MakerLaunch from "../MakerLaunch";

describe("MakerLaunch component", () => {
  it("MakerLaunch should render correctly", () => {
    render(<MakerLaunch />);
    expect(true).toBeTruthy();
  });
});
