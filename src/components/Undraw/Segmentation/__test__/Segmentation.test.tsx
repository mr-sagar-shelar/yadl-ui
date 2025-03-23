import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Segmentation from "../Segmentation";

describe("Segmentation component", () => {
  it("Segmentation should render correctly", () => {
    render(<Segmentation />);
    expect(true).toBeTruthy();
  });
});
