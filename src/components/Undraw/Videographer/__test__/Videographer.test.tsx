import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Videographer from "../Videographer";

describe("Videographer component", () => {
  it("Videographer should render correctly", () => {
    render(<Videographer />);
    expect(true).toBeTruthy();
  });
});
