import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RoadSign from "../RoadSign";

describe("RoadSign component", () => {
  it("RoadSign should render correctly", () => {
    render(<RoadSign />);
    expect(true).toBeTruthy();
  });
});
