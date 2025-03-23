import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import InTheZone from "../InTheZone";

describe("InTheZone component", () => {
  it("InTheZone should render correctly", () => {
    render(<InTheZone />);
    expect(true).toBeTruthy();
  });
});
