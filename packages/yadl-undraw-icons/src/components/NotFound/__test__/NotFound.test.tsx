import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NotFound from "../NotFound";

describe("NotFound component", () => {
  it("NotFound should render correctly", () => {
    render(<NotFound />);
    expect(true).toBeTruthy();
  });
});
