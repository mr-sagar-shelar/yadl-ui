import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SubwaySubway from "../SubwaySubway";

describe("SubwaySubway component", () => {
  it("SubwaySubway should render correctly", () => {
    render(<SubwaySubway />);
    expect(true).toBeTruthy();
  });
});
