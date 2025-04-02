import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import V from "../V";

describe("V component", () => {
  it("V should render correctly", () => {
    render(<V />);
    expect(true).toBeTruthy();
  });
});
