import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DataLayers from "../DataLayers";

describe("DataLayers component", () => {
  it("DataLayers should render correctly", () => {
    render(<DataLayers />);
    expect(true).toBeTruthy();
  });
});
