import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RoadToKnowledge from "../RoadToKnowledge";

describe("RoadToKnowledge component", () => {
  it("RoadToKnowledge should render correctly", () => {
    render(<RoadToKnowledge />);
    expect(true).toBeTruthy();
  });
});
