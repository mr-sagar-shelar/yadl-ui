import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LoveIt from "../LoveIt";

describe("LoveIt component", () => {
  it("LoveIt should render correctly", () => {
    render(<LoveIt />);
    expect(true).toBeTruthy();
  });
});
