import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Freelancer from "../Freelancer";

describe("Freelancer component", () => {
  it("Freelancer should render correctly", () => {
    render(<Freelancer />);
    expect(true).toBeTruthy();
  });
});
