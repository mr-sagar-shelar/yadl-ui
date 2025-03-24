import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HealthLake from "../HealthLake";

describe("HealthLake component", () => {
  it("HealthLake should render correctly", () => {
    render(<HealthLake />);
    expect(true).toBeTruthy();
  });
});
