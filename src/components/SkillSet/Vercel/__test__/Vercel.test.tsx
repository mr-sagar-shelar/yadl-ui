import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Vercel from "../Vercel";

describe("Vercel component", () => {
  it("Vercel should render correctly", () => {
    render(<Vercel />);
    expect(true).toBeTruthy();
  });
});
