import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CityDriver from "../CityDriver";

describe("CityDriver component", () => {
  it("CityDriver should render correctly", () => {
    render(<CityDriver />);
    expect(true).toBeTruthy();
  });
});
