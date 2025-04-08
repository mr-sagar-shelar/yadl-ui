import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Map from "../Map";

describe("Map component", () => {
  it("Map should render correctly", () => {
    render(<Map />);
    expect(true).toBeTruthy();
  });
});
