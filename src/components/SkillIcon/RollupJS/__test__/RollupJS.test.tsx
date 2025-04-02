import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RollupJS from "../RollupJS";

describe("RollupJS component", () => {
  it("RollupJS should render correctly", () => {
    render(<RollupJS />);
    expect(true).toBeTruthy();
  });
});
