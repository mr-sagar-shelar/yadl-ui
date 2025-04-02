import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Pinia from "../Pinia";

describe("Pinia component", () => {
  it("Pinia should render correctly", () => {
    render(<Pinia />);
    expect(true).toBeTruthy();
  });
});
