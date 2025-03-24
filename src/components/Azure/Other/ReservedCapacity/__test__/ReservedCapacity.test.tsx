import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ReservedCapacity from "../ReservedCapacity";

describe("ReservedCapacity component", () => {
  it("ReservedCapacity should render correctly", () => {
    render(<ReservedCapacity />);
    expect(true).toBeTruthy();
  });
});
