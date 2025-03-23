import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Collecting from "../Collecting";

describe("Collecting component", () => {
  it("Collecting should render correctly", () => {
    render(<Collecting />);
    expect(true).toBeTruthy();
  });
});
