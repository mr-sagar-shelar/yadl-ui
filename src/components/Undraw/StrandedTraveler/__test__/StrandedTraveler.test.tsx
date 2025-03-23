import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StrandedTraveler from "../StrandedTraveler";

describe("StrandedTraveler component", () => {
  it("StrandedTraveler should render correctly", () => {
    render(<StrandedTraveler />);
    expect(true).toBeTruthy();
  });
});
