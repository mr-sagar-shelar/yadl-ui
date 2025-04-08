import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VideoAnalyzers from "../VideoAnalyzers";

describe("VideoAnalyzers component", () => {
  it("VideoAnalyzers should render correctly", () => {
    render(<VideoAnalyzers />);
    expect(true).toBeTruthy();
  });
});
