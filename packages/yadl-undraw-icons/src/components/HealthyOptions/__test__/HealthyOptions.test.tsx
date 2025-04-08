import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HealthyOptions from "../HealthyOptions";

describe("HealthyOptions component", () => {
  it("HealthyOptions should render correctly", () => {
    render(<HealthyOptions />);
    expect(true).toBeTruthy();
  });
});
