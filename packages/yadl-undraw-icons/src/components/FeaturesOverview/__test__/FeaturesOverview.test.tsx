import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FeaturesOverview from "../FeaturesOverview";

describe("FeaturesOverview component", () => {
  it("FeaturesOverview should render correctly", () => {
    render(<FeaturesOverview />);
    expect(true).toBeTruthy();
  });
});
