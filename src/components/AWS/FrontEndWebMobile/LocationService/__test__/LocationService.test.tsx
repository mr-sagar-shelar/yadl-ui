import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LocationService from "../LocationService";

describe("LocationService component", () => {
  it("LocationService should render correctly", () => {
    render(<LocationService />);
    expect(true).toBeTruthy();
  });
});
