import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Destination from "../Destination";

describe("Destination component", () => {
  it("Destination should render correctly", () => {
    render(<Destination />);
    expect(true).toBeTruthy();
  });
});
