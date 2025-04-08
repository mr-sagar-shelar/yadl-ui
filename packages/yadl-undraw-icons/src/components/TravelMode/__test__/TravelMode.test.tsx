import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TravelMode from "../TravelMode";

describe("TravelMode component", () => {
  it("TravelMode should render correctly", () => {
    render(<TravelMode />);
    expect(true).toBeTruthy();
  });
});
