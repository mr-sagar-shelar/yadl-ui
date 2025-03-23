import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AtTheAirport from "../AtTheAirport";

describe("AtTheAirport component", () => {
  it("AtTheAirport should render correctly", () => {
    render(<AtTheAirport />);
    expect(true).toBeTruthy();
  });
});
