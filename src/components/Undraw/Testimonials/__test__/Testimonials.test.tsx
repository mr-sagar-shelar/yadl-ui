import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Testimonials from "../Testimonials";

describe("Testimonials component", () => {
  it("Testimonials should render correctly", () => {
    render(<Testimonials />);
    expect(true).toBeTruthy();
  });
});
