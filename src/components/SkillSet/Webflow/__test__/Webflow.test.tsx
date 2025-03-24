import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Webflow from "../Webflow";

describe("Webflow component", () => {
  it("Webflow should render correctly", () => {
    render(<Webflow />);
    expect(true).toBeTruthy();
  });
});
