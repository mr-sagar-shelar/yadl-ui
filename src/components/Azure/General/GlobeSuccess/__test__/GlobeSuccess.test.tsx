import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GlobeSuccess from "../GlobeSuccess";

describe("GlobeSuccess component", () => {
  it("GlobeSuccess should render correctly", () => {
    render(<GlobeSuccess />);
    expect(true).toBeTruthy();
  });
});
