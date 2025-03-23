import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MyCurrentLocation from "../MyCurrentLocation";

describe("MyCurrentLocation component", () => {
  it("MyCurrentLocation should render correctly", () => {
    render(<MyCurrentLocation />);
    expect(true).toBeTruthy();
  });
});
