import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Pitching from "../Pitching";

describe("Pitching component", () => {
  it("Pitching should render correctly", () => {
    render(<Pitching />);
    expect(true).toBeTruthy();
  });
});
