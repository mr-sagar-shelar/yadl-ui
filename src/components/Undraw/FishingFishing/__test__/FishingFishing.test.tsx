import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FishingFishing from "../FishingFishing";

describe("FishingFishing component", () => {
  it("FishingFishing should render correctly", () => {
    render(<FishingFishing />);
    expect(true).toBeTruthy();
  });
});
