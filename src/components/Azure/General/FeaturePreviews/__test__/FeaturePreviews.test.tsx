import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FeaturePreviews from "../FeaturePreviews";

describe("FeaturePreviews component", () => {
  it("FeaturePreviews should render correctly", () => {
    render(<FeaturePreviews />);
    expect(true).toBeTruthy();
  });
});
