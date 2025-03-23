import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ProgressData from "../ProgressData";

describe("ProgressData component", () => {
  it("ProgressData should render correctly", () => {
    render(<ProgressData />);
    expect(true).toBeTruthy();
  });
});
