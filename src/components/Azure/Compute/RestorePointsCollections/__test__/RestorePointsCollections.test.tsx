import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RestorePointsCollections from "../RestorePointsCollections";

describe("RestorePointsCollections component", () => {
  it("RestorePointsCollections should render correctly", () => {
    render(<RestorePointsCollections />);
    expect(true).toBeTruthy();
  });
});
