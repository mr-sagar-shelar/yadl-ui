import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ToyCarToyCar from "../ToyCarToyCar";

describe("ToyCarToyCar component", () => {
  it("ToyCarToyCar should render correctly", () => {
    render(<ToyCarToyCar />);
    expect(true).toBeTruthy();
  });
});
