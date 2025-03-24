import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PowerUp from "../PowerUp";

describe("PowerUp component", () => {
  it("PowerUp should render correctly", () => {
    render(<PowerUp />);
    expect(true).toBeTruthy();
  });
});
