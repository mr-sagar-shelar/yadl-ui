import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Peerings from "../Peerings";

describe("Peerings component", () => {
  it("Peerings should render correctly", () => {
    render(<Peerings />);
    expect(true).toBeTruthy();
  });
});
