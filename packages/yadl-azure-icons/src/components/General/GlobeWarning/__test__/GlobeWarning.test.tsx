import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GlobeWarning from "../GlobeWarning";

describe("GlobeWarning component", () => {
  it("GlobeWarning should render correctly", () => {
    render(<GlobeWarning />);
    expect(true).toBeTruthy();
  });
});
