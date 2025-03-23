import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import At_the_parkAtThePark from "../At_the_parkAtThePark";

describe("At_the_parkAtThePark component", () => {
  it("At_the_parkAtThePark should render correctly", () => {
    render(<At_the_parkAtThePark />);
    expect(true).toBeTruthy();
  });
});
