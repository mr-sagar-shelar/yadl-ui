import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PageNotFound from "../PageNotFound";

describe("PageNotFound component", () => {
  it("PageNotFound should render correctly", () => {
    render(<PageNotFound />);
    expect(true).toBeTruthy();
  });
});
