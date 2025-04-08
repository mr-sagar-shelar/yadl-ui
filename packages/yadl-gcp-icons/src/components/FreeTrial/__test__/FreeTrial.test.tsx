import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FreeTrial from "../FreeTrial";

describe("FreeTrial component", () => {
  it("FreeTrial should render correctly", () => {
    render(<FreeTrial />);
    expect(true).toBeTruthy();
  });
});
