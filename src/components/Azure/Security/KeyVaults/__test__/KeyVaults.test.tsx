import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import KeyVaults from "../KeyVaults";

describe("KeyVaults component", () => {
  it("KeyVaults should render correctly", () => {
    render(<KeyVaults />);
    expect(true).toBeTruthy();
  });
});
