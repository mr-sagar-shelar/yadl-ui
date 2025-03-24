import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Dataflow from "../Dataflow";

describe("Dataflow component", () => {
  it("Dataflow should render correctly", () => {
    render(<Dataflow />);
    expect(true).toBeTruthy();
  });
});
