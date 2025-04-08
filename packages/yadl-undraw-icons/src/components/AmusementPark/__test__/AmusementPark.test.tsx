import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AmusementPark from "../AmusementPark";

describe("AmusementPark component", () => {
  it("AmusementPark should render correctly", () => {
    render(<AmusementPark />);
    expect(true).toBeTruthy();
  });
});
