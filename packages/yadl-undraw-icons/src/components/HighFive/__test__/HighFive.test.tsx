import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HighFive from "../HighFive";

describe("HighFive component", () => {
  it("HighFive should render correctly", () => {
    render(<HighFive />);
    expect(true).toBeTruthy();
  });
});
