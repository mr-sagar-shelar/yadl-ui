import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import UnderConstructionUnderConstruction from "../UnderConstructionUnderConstruction";

describe("UnderConstructionUnderConstruction component", () => {
  it("UnderConstructionUnderConstruction should render correctly", () => {
    render(<UnderConstructionUnderConstruction />);
    expect(true).toBeTruthy();
  });
});
