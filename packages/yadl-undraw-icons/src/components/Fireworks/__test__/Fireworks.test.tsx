import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Fireworks from "../Fireworks";

describe("Fireworks component", () => {
  it("Fireworks should render correctly", () => {
    render(<Fireworks />);
    expect(true).toBeTruthy();
  });
});
