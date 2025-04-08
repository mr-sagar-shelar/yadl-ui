import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ProudCoder from "../ProudCoder";

describe("ProudCoder component", () => {
  it("ProudCoder should render correctly", () => {
    render(<ProudCoder />);
    expect(true).toBeTruthy();
  });
});
