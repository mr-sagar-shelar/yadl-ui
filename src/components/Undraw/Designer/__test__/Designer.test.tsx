import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Designer from "../Designer";

describe("Designer component", () => {
  it("Designer should render correctly", () => {
    render(<Designer />);
    expect(true).toBeTruthy();
  });
});
