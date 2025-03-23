import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IndoorBike from "../IndoorBike";

describe("IndoorBike component", () => {
  it("IndoorBike should render correctly", () => {
    render(<IndoorBike />);
    expect(true).toBeTruthy();
  });
});
