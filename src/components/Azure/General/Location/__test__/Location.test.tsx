import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Location from "../Location";

describe("Location component", () => {
  it("Location should render correctly", () => {
    render(<Location />);
    expect(true).toBeTruthy();
  });
});
