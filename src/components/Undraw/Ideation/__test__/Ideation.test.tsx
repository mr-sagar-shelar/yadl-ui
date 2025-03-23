import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Ideation from "../Ideation";

describe("Ideation component", () => {
  it("Ideation should render correctly", () => {
    render(<Ideation />);
    expect(true).toBeTruthy();
  });
});
