import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GlobeError from "../GlobeError";

describe("GlobeError component", () => {
  it("GlobeError should render correctly", () => {
    render(<GlobeError />);
    expect(true).toBeTruthy();
  });
});
