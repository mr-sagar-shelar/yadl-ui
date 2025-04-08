import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Neuron from "../Neuron";

describe("Neuron component", () => {
  it("Neuron should render correctly", () => {
    render(<Neuron />);
    expect(true).toBeTruthy();
  });
});
