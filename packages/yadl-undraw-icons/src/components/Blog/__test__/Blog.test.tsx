import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Blog from "../Blog";

describe("Blog component", () => {
  it("Blog should render correctly", () => {
    render(<Blog />);
    expect(true).toBeTruthy();
  });
});
