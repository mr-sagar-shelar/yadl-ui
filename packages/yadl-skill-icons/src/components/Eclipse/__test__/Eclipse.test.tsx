import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Eclipse from "../Eclipse";

describe("Eclipse component", () => {
  it("Eclipse should render correctly", () => {
    render(<Eclipse />);
    expect(true).toBeTruthy();
  });
});
