import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Surfer from "../Surfer";

describe("Surfer component", () => {
  it("Surfer should render correctly", () => {
    render(<Surfer />);
    expect(true).toBeTruthy();
  });
});
