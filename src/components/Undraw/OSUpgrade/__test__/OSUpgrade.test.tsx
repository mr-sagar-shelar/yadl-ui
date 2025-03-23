import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OSUpgrade from "../OSUpgrade";

describe("OSUpgrade component", () => {
  it("OSUpgrade should render correctly", () => {
    render(<OSUpgrade />);
    expect(true).toBeTruthy();
  });
});
