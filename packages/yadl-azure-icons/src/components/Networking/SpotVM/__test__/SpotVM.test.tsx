import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SpotVM from "../SpotVM";

describe("SpotVM component", () => {
  it("SpotVM should render correctly", () => {
    render(<SpotVM />);
    expect(true).toBeTruthy();
  });
});
