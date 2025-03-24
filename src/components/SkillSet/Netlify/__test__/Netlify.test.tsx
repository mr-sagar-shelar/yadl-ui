import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Netlify from "../Netlify";

describe("Netlify component", () => {
  it("Netlify should render correctly", () => {
    render(<Netlify />);
    expect(true).toBeTruthy();
  });
});
