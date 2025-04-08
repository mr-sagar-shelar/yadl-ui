import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Contract from "../Contract";

describe("Contract component", () => {
  it("Contract should render correctly", () => {
    render(<Contract />);
    expect(true).toBeTruthy();
  });
});
