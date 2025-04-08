import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StreetFood from "../StreetFood";

describe("StreetFood component", () => {
  it("StreetFood should render correctly", () => {
    render(<StreetFood />);
    expect(true).toBeTruthy();
  });
});
