import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Preparation from "../Preparation";

describe("Preparation component", () => {
  it("Preparation should render correctly", () => {
    render(<Preparation />);
    expect(true).toBeTruthy();
  });
});
