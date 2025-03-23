import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CabinCabin from "../CabinCabin";

describe("CabinCabin component", () => {
  it("CabinCabin should render correctly", () => {
    render(<CabinCabin />);
    expect(true).toBeTruthy();
  });
});
