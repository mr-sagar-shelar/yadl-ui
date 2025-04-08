import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Data from "../Data";

describe("Data component", () => {
  it("Data should render correctly", () => {
    render(<Data />);
    expect(true).toBeTruthy();
  });
});
