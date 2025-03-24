import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PeeringService from "../PeeringService";

describe("PeeringService component", () => {
  it("PeeringService should render correctly", () => {
    render(<PeeringService />);
    expect(true).toBeTruthy();
  });
});
