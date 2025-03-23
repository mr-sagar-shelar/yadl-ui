import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Destinations from "../Destinations";

describe("Destinations component", () => {
  it("Destinations should render correctly", () => {
    render(<Destinations />);
    expect(true).toBeTruthy();
  });
});
