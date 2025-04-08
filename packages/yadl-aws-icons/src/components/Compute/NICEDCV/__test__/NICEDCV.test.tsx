import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NICEDCV from "../NICEDCV";

describe("NICEDCV component", () => {
  it("NICEDCV should render correctly", () => {
    render(<NICEDCV />);
    expect(true).toBeTruthy();
  });
});
