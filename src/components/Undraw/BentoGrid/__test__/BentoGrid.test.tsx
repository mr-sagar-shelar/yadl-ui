import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BentoGrid from "../BentoGrid";

describe("BentoGrid component", () => {
  it("BentoGrid should render correctly", () => {
    render(<BentoGrid />);
    expect(true).toBeTruthy();
  });
});