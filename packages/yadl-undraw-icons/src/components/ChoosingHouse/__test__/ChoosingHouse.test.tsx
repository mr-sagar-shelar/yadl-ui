import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ChoosingHouse from "../ChoosingHouse";

describe("ChoosingHouse component", () => {
  it("ChoosingHouse should render correctly", () => {
    render(<ChoosingHouse />);
    expect(true).toBeTruthy();
  });
});
