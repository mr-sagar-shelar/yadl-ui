import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Invest from "../Invest";

describe("Invest component", () => {
  it("Invest should render correctly", () => {
    render(<Invest />);
    expect(true).toBeTruthy();
  });
});
