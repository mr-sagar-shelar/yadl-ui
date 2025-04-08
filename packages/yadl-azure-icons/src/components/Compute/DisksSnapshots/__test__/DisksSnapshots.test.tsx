import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DisksSnapshots from "../DisksSnapshots";

describe("DisksSnapshots component", () => {
  it("DisksSnapshots should render correctly", () => {
    render(<DisksSnapshots />);
    expect(true).toBeTruthy();
  });
});
