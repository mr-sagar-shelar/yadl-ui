import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SimSpaceWeaver from "../SimSpaceWeaver";

describe("SimSpaceWeaver component", () => {
  it("SimSpaceWeaver should render correctly", () => {
    render(<SimSpaceWeaver />);
    expect(true).toBeTruthy();
  });
});
