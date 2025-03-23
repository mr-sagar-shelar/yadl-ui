import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Projections from "../Projections";

describe("Projections component", () => {
  it("Projections should render correctly", () => {
    render(<Projections />);
    expect(true).toBeTruthy();
  });
});
