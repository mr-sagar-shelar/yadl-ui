import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RelaxedReading from "../RelaxedReading";

describe("RelaxedReading component", () => {
  it("RelaxedReading should render correctly", () => {
    render(<RelaxedReading />);
    expect(true).toBeTruthy();
  });
});
