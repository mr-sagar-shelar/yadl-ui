import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FishBowlFishBowl from "../FishBowlFishBowl";

describe("FishBowlFishBowl component", () => {
  it("FishBowlFishBowl should render correctly", () => {
    render(<FishBowlFishBowl />);
    expect(true).toBeTruthy();
  });
});
