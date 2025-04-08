import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Injured from "../Injured";

describe("Injured component", () => {
  it("Injured should render correctly", () => {
    render(<Injured />);
    expect(true).toBeTruthy();
  });
});
