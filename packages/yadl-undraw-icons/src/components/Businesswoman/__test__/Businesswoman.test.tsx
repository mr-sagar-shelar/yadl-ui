import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Businesswoman from "../Businesswoman";

describe("Businesswoman component", () => {
  it("Businesswoman should render correctly", () => {
    render(<Businesswoman />);
    expect(true).toBeTruthy();
  });
});
